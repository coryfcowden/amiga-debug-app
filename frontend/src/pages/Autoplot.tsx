import { useNavigate, Outlet } from "react-router-dom";
import { VscArrowLeft, VscArrowRight, VscChromeClose } from "react-icons/vsc";
import {
  IoAnalyticsOutline,
  IoCloseCircleOutline,
  IoHelpCircleOutline,
  IoShareSocialOutline,
} from "react-icons/io5";

function Autoplot() {
  const navigate = useNavigate();

  return (
    <div className="popup-container">
      <button className="back-button" onClick={() => navigate("/report")}>
        <VscArrowLeft /> Back
      </button>

      <button className="exit-button" onClick={() => navigate("/")}>
        Exit <VscChromeClose />
      </button>

      <h1 className="popup-title">Report Issue</h1>
      <button
        className="rectangle-button"
        onClick={() => navigate("/explanation")}
      >
        <IoAnalyticsOutline size={106} />
        <IoAnalyticsOutline size={106} />
        Path not Smooth
      </button>

      <button
        className="rectangle-button"
        onClick={() => navigate("/autoplot/robot-off-path/qr")}
      >
        <IoShareSocialOutline size={106} />
        <IoHelpCircleOutline size={78} />
        Robot off Path
      </button>

      <button
        className="rectangle-button"
        onClick={() => navigate("/autoplot/robot-will-not-follow/qr")}
      >
        <VscArrowRight size={113} />
        <IoCloseCircleOutline size={72} />
        Robot will not Follow
      </button>
      <Outlet />
    </div>
  );
}

export default Autoplot;
