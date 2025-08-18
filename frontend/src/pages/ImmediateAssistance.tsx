import { useState } from "react";
import { IoCheckmarkCircleOutline, IoReceiptOutline } from "react-icons/io5";
import { VscArrowLeft, VscChromeClose } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
//import { issueReport } from "../grpc/issueReport";
import { useIssueReport } from "../context/IssueReportContext";

function ImmediateAssistance() {
  const [outcome, setOutcome] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setIssue } = useIssueReport();

  //right now set up with dummy data to test grpc
  // const handleSendReport = async () => {
  //   try {
  //     const res = await issueReport({
  //       userEmail: "test@example.com",
  //       userDescription: "Test issue from frontend",
  //       category: "Autoplot",
  //       subcategory: "Not Following",
  //       urgent: true,
  //       timestamp: new Date().toISOString(),
  //       location: "36N 121W",
  //       motorData: "ESTOPPED",
  //     });
  //     alert("Server response: " + res);
  //   } catch (err) {
  //     console.error("gRPC call failed:", err);
  //     alert("Failed to report issue");
  //   }
  // };

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
              setIssue((prev) => ({ ...prev, urgent: 1 }));
              //TODO: trigger nodemailer/grpc here
              // await handleSendReport();
              setOutcome("yes");
            }}
          >
            <strong>Yes</strong>
            <IoCheckmarkCircleOutline size={72} />
          </button>

          <button
            className="assistance-no-button"
            onClick={async () => {
              setIssue((prev) => ({ ...prev, urgent: 2 }));
              //TODO: trigger nodemailer/grpc here
              // await handleSendReport();
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
            A Farm-ng member will reach out to you ASAP!
            {/* BUTTON TO TEST EMAIL PREVIEW */}
            <button
              className="rectangle-button"
              onClick={() => navigate("/summary")}
            >
              Go to Summary Page
            </button>
          </h1>
        </>
      )}

      {outcome === "no" && (
        <>
          <h1 className="assistance-report-text">Issue reported!</h1>
          {/* BUTTON TO TEST EMAIL PREVIEW */}
          <button
            className="rectangle-button"
            onClick={() => navigate("/summary")}
          >
            Go to Summary Page
          </button>
        </>
      )}
    </div>
  );
}

export default ImmediateAssistance;
