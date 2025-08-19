import {
  IoAlertCircleOutline,
  IoCloseCircleOutline,
  IoHelpCircleOutline,
  IoWifiSharp,
} from "react-icons/io5";
import { VscArrowLeft, VscChromeClose, VscSyncIgnored } from "react-icons/vsc";
import { useNavigate, Outlet, useParams } from "react-router-dom";
import { useIssueReport } from "../context/IssueReportContext";

function MiscDetails() {
  const { category } = useParams();
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

      {category === "filter" && (
        <>
          <button
            className="rectangle-button"
            onClick={() => {
              setIssue((prev) => ({
                ...prev,
                category: "filter",
                subCategory: "incorrect calibration",
              }));
              navigate(`/misc/${category}/filter-calibration/qr`);
            }}
          >
            <IoCloseCircleOutline size={113} /> Incorrect Calibration
          </button>
          <button
            className="rectangle-button"
            onClick={() => {
              setIssue((prev) => ({
                ...prev,
                category: "filter",
                subCategory: "filter error",
              }));
              navigate(`/misc/${category}/filter-error/qr`);
            }}
          >
            <IoAlertCircleOutline size={113} /> Filter Error
          </button>
          <button
            className="rectangle-button"
            onClick={() => {
              setIssue((prev) => ({
                ...prev,
                category: "filter",
                subCategory: "other",
              }));
              navigate(`/explanation`);
            }}
          >
            <IoHelpCircleOutline size={113} /> Other
          </button>
        </>
      )}

      {category === "wifi" && (
        <>
          <button
            className="rectangle-button"
            onClick={() => {
              setIssue((prev) => ({
                ...prev,
                category: "wifi",
                subCategory: "wifi not connecting",
              }));
              navigate(`/explanation`);
            }}
          >
            <IoWifiSharp size={113} /> Wifi not Connecting
          </button>
          <button
            className="rectangle-button"
            onClick={() => {
              setIssue((prev) => ({
                ...prev,
                category: "wifi",
                subCategory: "poor connection",
              }));
              navigate(`/explanation`);
            }}
          >
            <IoAlertCircleOutline size={113} /> Poor Connection
          </button>
          <button
            className="rectangle-button"
            onClick={() => {
              setIssue((prev) => ({
                ...prev,
                category: "wifi",
                subCategory: "other",
              }));
              navigate(`/explanation`);
            }}
          >
            <IoHelpCircleOutline size={113} /> Other
          </button>
        </>
      )}

      {category === "other" && (
        <>
          <button
            className="rectangle-button"
            onClick={() => {
              setIssue((prev) => ({
                ...prev,
                category: "other",
                subCategory: "reboot error",
              }));
              navigate(`/explanation`);
            }}
          >
            <VscSyncIgnored size={113} /> Reboot Error
          </button>
          <button
            className="rectangle-button"
            onClick={() => {
              setIssue((prev) => ({
                ...prev,
                category: "other",
                subCategory: "unknown error code",
              }));
              navigate(`/misc/${category}/unknown-error/qr`);
            }}
          >
            <IoHelpCircleOutline size={113} /> Unknown Error Code
          </button>
          <button
            className="rectangle-button"
            onClick={() => {
              setIssue((prev) => ({
                ...prev,
                category: "other",
                subCategory: "software/firmware update failure",
              }));
              navigate(`/explanation`);
            }}
          >
            <IoCloseCircleOutline size={153} /> Software/Firmware Update Failure
          </button>
        </>
      )}

      <Outlet />
    </div>
  );
}

export default MiscDetails;
