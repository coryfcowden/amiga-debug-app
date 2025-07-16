import { useState } from "react";
import { IoCheckmarkCircleOutline, IoReceiptOutline } from "react-icons/io5";
import { VscArrowLeft, VscChromeClose } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

function ImmediateAssistance() {
  const [outcome, setOutcome] = useState<string | null>(null);
  const navigate = useNavigate();

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
          <h1>Do you need immediate assistance?</h1>

          <button
            className="assistance-yes-button"
            onClick={() => setOutcome("yes")}
          >
            <strong>Yes</strong>
            <IoCheckmarkCircleOutline size={72} />
          </button>

          <button
            className="assistance-no-button"
            onClick={() => setOutcome("no")}
          >
            <IoReceiptOutline size={72} /> No, just report issue
          </button>
        </>
      )}

      {outcome === "yes" && (
        <>
          <h1 className="assistance-report-text">
            A Farm-ng member will reach out to you ASAP!
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
