import { VscArrowLeft, VscArrowRight, VscChromeClose } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { useIssueReport } from "../context/IssueReportContext";

function Explanation() {
  const navigate = useNavigate();

  const { issue, setIssue } = useIssueReport();

  const handleContinue = () => {
    if (!issue.userEmail) {
      alert("Please enter your email address.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(issue.userEmail.trim())) {
      alert("Please enter a valid email address.");
      return;
    }
    navigate("/immediate-assistance");
  };

  return (
    <div className="popup-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <VscArrowLeft /> Back
      </button>

      <button className="exit-button" onClick={() => navigate("/")}>
        Exit <VscChromeClose />
      </button>

      <h1 className="popup-title">Report Issue</h1>

      <h1 className="explanation-title">Explanation</h1>

      <textarea
        className="explanation-textarea-1"
        placeholder=" Describe your issue in more detail"
        onChange={(e) =>
          setIssue((prev) => ({ ...prev, userDescription: e.target.value }))
        }
      />

      <h1 className="explanation-title">Where can we contact you? *</h1>

      <textarea
        className="explanation-textarea-2"
        placeholder=" example@gmail.com"
        onChange={(e) =>
          setIssue((prev) => ({ ...prev, userEmail: e.target.value }))
        }
      />

      <button
        className="explanation-continue-button"
        onClick={() => handleContinue()}
      >
        <strong>Continue</strong> <VscArrowRight size={40} />
      </button>
    </div>
  );
}

export default Explanation;
