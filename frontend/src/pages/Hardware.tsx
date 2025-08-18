import { useNavigate, Outlet } from "react-router-dom";
import { VscArrowLeft, VscChromeClose } from "react-icons/vsc";
import {
  IoAnalyticsOutline,
  IoCloseCircleOutline,
  IoCropSharp,
} from "react-icons/io5";
import { useIssueReport } from "../context/IssueReportContext";

function Hardware() {
  const navigate = useNavigate();
  const { setIssue } = useIssueReport();

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
        onClick={() => {
          setIssue((prev) => ({
            ...prev,
            category: "hardware",
            subCategory: "robot geometry",
          }));
          navigate("/hardware/robot-geometry/qr");
        }}
      >
        <IoCropSharp size={113} /> Robot Geometry
      </button>

      <button
        className="rectangle-button"
        onClick={() => {
          setIssue((prev) => ({
            ...prev,
            category: "hardware",
            subCategory: "misalignment",
          }));
          navigate("/explanation");
        }}
      >
        <IoAnalyticsOutline size={113} /> Misalignment
      </button>

      <button
        className="rectangle-button"
        onClick={() => {
          setIssue((prev) => ({
            ...prev,
            category: "hardware",
            subCategory: "broken part",
          }));
          navigate("/explanation");
        }}
      >
        <IoCloseCircleOutline size={113} /> Broken Part
      </button>

      <Outlet />
    </div>
  );
}

export default Hardware;
