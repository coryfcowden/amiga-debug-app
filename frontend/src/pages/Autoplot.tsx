import { useNavigate, Outlet } from "react-router-dom";
import { VscArrowLeft, VscArrowRight, VscChromeClose } from "react-icons/vsc";
import {
  IoAnalyticsOutline,
  IoCloseCircleOutline,
  IoHelpCircleOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import { useIssueReport } from "../context/IssueReportContext";

function Autoplot() {
  const navigate = useNavigate();
  const { setIssue } = useIssueReport();

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
        onClick={() => {
          setIssue((prev) => ({
            ...prev,
            category: "autoplot",
            subCategory: "path not smooth",
          }));
          navigate("/explanation");
        }}
      >
        <IoAnalyticsOutline size={106} />
        <IoAnalyticsOutline size={106} />
        Path not Smooth
      </button>

      <button
        className="rectangle-button"
        onClick={() => {
          setIssue((prev) => ({
            ...prev,
            category: "autoplot",
            subCategory: "robot off path",
          }));
          navigate("/autoplot/robot-off-path/qr");
        }}
      >
        <IoShareSocialOutline size={106} />
        <IoHelpCircleOutline size={78} />
        Robot off Path
      </button>

      <button
        className="rectangle-button"
        onClick={() => {
          setIssue((prev) => ({
            ...prev,
            category: "autoplot",
            subCategory: "robot will not follow",
          }));
          navigate("/autoplot/robot-will-not-follow/qr");
        }}
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
