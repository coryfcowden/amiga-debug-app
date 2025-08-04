import React from "react";
import { VscArrowLeft, VscArrowRight, VscChromeClose } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

function Explanation() {
  const navigate = useNavigate();

  const [userDescription, setUserDescription] = React.useState<string>("");
  const [userEmail, setUserEmail] = React.useState<string>("");

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
        onChange={(e) => setUserDescription(e.target.value)}
      />

      <h1 className="explanation-title">Where can we contact you?</h1>

      <textarea
        className="explanation-textarea-2"
        placeholder=" example@gmail.com"
        onChange={(e) => setUserEmail(e.target.value)}
      />

      <button
        className="explanation-continue-button"
        onClick={() => navigate("/immediate-assistance")}
      >
        Continue <VscArrowRight size={40} />
      </button>
    </div>
  );
}

export default Explanation;
