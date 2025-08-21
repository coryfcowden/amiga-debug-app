import { useState } from "react";
import { IoCheckmarkCircleOutline, IoReceiptOutline } from "react-icons/io5";
import { VscArrowLeft, VscChromeClose } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { useIssueReport } from "../context/IssueReportContext";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { issueReporterClient } from "../grpc/issueReport.client";
import { IssueReport } from "../context/IssueReportContext";

function ImmediateAssistance() {
  const [outcome, setOutcome] = useState<string | null>(null);
  const navigate = useNavigate();
  const { issue, setIssue } = useIssueReport();
  const transport = new GrpcWebFetchTransport({
    baseUrl: "http://localhost:8080",
  });
  const client = new issueReporterClient(transport);

  async function handleSendReport(updated: IssueReport) {
    try {
      const response = await client.reportIssue({
        userEmail: updated.userEmail || "",
        userDescription: updated.userDescription || "",
        category: updated.category ?? "",
        subCategory: updated.subCategory ?? "",
        urgent: updated.urgent ?? false,
        timestamp: new Date().toISOString(),
        location: "36N 121W",
        motorData: "ESTOPPED",
      });
      console.log("Server response:", response);
    } catch (error) {
      console.error("gRPC call failed:", error);
      alert("Failed to report issue");
    }
  }

  return (
    <div className="popup-container">
      {!outcome && (
        <button className="back-button" onClick={() => navigate(-1)}>
          <VscArrowLeft /> Back
        </button>
      )}

      <button className="exit-button" onClick={() => navigate("/")}>
        Exit <VscChromeClose />
      </button>

      <h1 className="popup-title">Report Issue</h1>

      {!outcome && (
        <>
          <h1 className="assistance-title">
            Do you need immediate assistance?
          </h1>

          <button
            className="assistance-yes-button"
            onClick={async () => {
              const updated = { ...issue, urgent: true };
              setIssue(updated);
              await handleSendReport(updated);
              setOutcome("yes");
            }}
          >
            <strong>Yes</strong>
            <IoCheckmarkCircleOutline size={72} />
          </button>

          <button
            className="assistance-no-button"
            onClick={async () => {
              const updated = { ...issue, urgent: false };
              setIssue(updated);
              await handleSendReport(updated);
              setOutcome("no");
            }}
          >
            <IoReceiptOutline size={72} /> No, just report issue
          </button>
        </>
      )}

      {outcome === "yes" && (
        <>
          <h1 className="assistance-report-text">
            A Farm-ng member will reach out to you ASAP!{" "}
          </h1>
        </>
      )}

      {outcome === "no" && (
        <>
          <h1 className="assistance-report-text">Issue reported!</h1>
        </>
      )}
    </div>
  );
}

export default ImmediateAssistance;
