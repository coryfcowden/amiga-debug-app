import {
  IoCloseCircleOutline,
  IoHelpCircleOutline,
  IoAlertCircleOutline,
} from "react-icons/io5";
import { VscArrowLeft, VscChromeClose } from "react-icons/vsc";
import { useNavigate, Outlet } from "react-router-dom";
import { useIssueReport } from "../context/IssueReportContext";

function Interface({}) {
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
            category: "interface",
            subCategory: "app(s) disappeared",
          }));
          navigate("/interface/apps-disappeared/qr");
        }}
      >
        <IoHelpCircleOutline size={113} /> App(s) Disappeared
      </button>

      <button
        className="rectangle-button"
        onClick={() => {
          setIssue((prev) => ({
            ...prev,
            category: "interface",
            subCategory: "unresponsive",
          }));
          navigate("/interface/unresponsive/qr");
        }}
      >
        <IoCloseCircleOutline size={113} /> Unresponsive
      </button>

      <button
        className="rectangle-button"
        onClick={() => {
          setIssue((prev) => ({
            ...prev,
            category: "interface",
            subCategory: "other",
          }));
          navigate(`/explanation`);
        }}
      >
        <IoAlertCircleOutline size={113} /> Other
      </button>

      <Outlet />
    </div>
  );
}

export default Interface;
