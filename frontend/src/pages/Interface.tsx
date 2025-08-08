import { IoCloseCircleOutline, IoHelpCircleOutline } from "react-icons/io5";
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
        onClick={() => navigate("/interface/apps-disappeared/qr")}
      >
        <IoHelpCircleOutline size={113} /> App(s) Disappeared
      </button>

      <button
        className="rectangle-button"
        onClick={() => navigate("/interface/unresponsive/qr")}
      >
        <IoCloseCircleOutline size={113} /> Unresponsive
      </button>

      <Outlet />
    </div>
  );
}

export default Interface;
