import { useIssueReport } from "../context/IssueReportContext";
import { VscArrowLeft, VscChromeClose } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

function Summary() {
  const { issue, resetIssue } = useIssueReport();
  const navigate = useNavigate();

  return (
    <div className="popup-container">
      <button
        className="exit-button"
        onClick={() => {
          resetIssue();
          navigate("/");
        }}
      >
        Exit <VscChromeClose />
      </button>

      <h1 className="popup-title">Summary of Report</h1>

      <div className="summary-box">
        <p>
          <strong>Email:</strong> {issue.userEmail || "(none entered)"}
        </p>
        <p>
          <strong>Description:</strong>{" "}
          {issue.userDescription || "(none entered)"}
        </p>
        <p>
          <strong>Category:</strong> {issue.category || "(not chosen)"}
        </p>
        <p>
          <strong>Subcategory:</strong> {issue.subCategory || "(not chosen)"}
        </p>
        <p>
          <strong>Urgency:</strong>
          {issue.urgent === 1
            ? " Urgent (Immediate Assistance)"
            : issue.urgent === 2
              ? " Not Urgent (Just report)"
              : "(not set)"}
        </p>
      </div>

      <button
        className="rectangle-button"
        onClick={() => {
          alert(
            "This is what I'd send to gRPC/Nodemailer:\n\n" +
              JSON.stringify(issue, null, 2),
          );
        }}
      >
        Test Send (console log)
      </button>
    </div>
  );
}

export default Summary;
