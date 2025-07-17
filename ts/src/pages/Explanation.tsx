import React from "react";
import { VscArrowLeft, VscArrowRight, VscChromeClose } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

function Explanation() {
  const navigate = useNavigate();

  const [description, setDescription] = React.useState<string>("");
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
        className="explanation-textarea"
        placeholder=" Describe your issue in more detail"
        onChange={(e) => setDescription(e.target.value)}
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
