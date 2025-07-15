import {
  IoCloseCircleOutline,
  IoHelpCircleOutline,
  IoLayersOutline,
} from "react-icons/io5";
import { VscArrowLeft, VscChromeClose } from "react-icons/vsc";
import { useNavigate, Outlet } from "react-router-dom";

function Interface({}) {
  const navigate = useNavigate();

  return (
    <div className="popup-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <VscArrowLeft /> Back
      </button>

      <button className="exit-button" onClick={() => navigate("/")}>
        Exit <VscChromeClose />
      </button>

      <h1 className="popup-title">Report Issue</h1>

      <button
        className="rectangle-button"
        onClick={() => navigate("/interface/qr-1")}
      >
        <IoHelpCircleOutline size={113} /> App(s) Disappeared
      </button>

      <button
        className="rectangle-button"
        onClick={() => navigate("/interface/qr-2")}
      >
        <IoLayersOutline size={113} /> Random Popups
      </button>

      <button
        className="rectangle-button"
        onClick={() => navigate("/immediate-assistance")}
      >
        <IoCloseCircleOutline size={113} /> Unresponsive
      </button>

      <Outlet />
    </div>
  );
}

export default Interface;
