import { useNavigate, Outlet } from "react-router-dom";
import { VscArrowLeft, VscChromeClose } from "react-icons/vsc";
import {
  IoAnalyticsOutline,
  IoCloseCircleOutline,
  IoCropSharp,
} from "react-icons/io5";

function Hardware() {
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
        onClick={() => navigate("/hardware/robot-geometry/qr")}
      >
        <IoCropSharp size={113} /> Robot Geometry
      </button>

      <button
        className="rectangle-button"
        onClick={() => navigate("/immediate-assistance")}
      >
        <IoAnalyticsOutline size={113} /> Misalignment
      </button>

      <button
        className="rectangle-button"
        onClick={() => navigate("/immediate-assistance")}
      >
        <IoCloseCircleOutline size={113} /> Broken Part
      </button>

      <Outlet />
    </div>
  );
}

export default Hardware;
