import {
  IoCameraReverseOutline,
  IoCloseCircleOutline,
  IoHelpCircleOutline,
  IoLocateOutline,
  IoNavigateOutline,
  IoAlertCircleOutline,
} from "react-icons/io5";
import { VscArrowLeft, VscChromeClose } from "react-icons/vsc";
import { useNavigate, Outlet, useParams } from "react-router-dom";
import { useIssueReport } from "../context/IssueReportContext";

function ServiceDetails() {
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

      {category === "camera" && (
        <>
          <button
            className="rectangle-button"
            onClick={() => {
              setIssue((prev) => ({
                ...prev,
                category: "camera",
                subCategory: "no power to camera",
              }));
              navigate(`/explanation`);
            }}
          >
            <IoCloseCircleOutline size={113} /> No Power to Camera
          </button>

          <button
            className="rectangle-button"
            onClick={() => {
              setIssue((prev) => ({
                ...prev,
                category: "camera",
                subCategory: "camera feed frozen",
              }));
              navigate(`/services/${category}/camera-feed-frozen/qr`);
            }}
          >
            <IoCameraReverseOutline size={113} /> Camera Feed Frozen
          </button>
          <button
            className="rectangle-button"
            onClick={() => {
              setIssue((prev) => ({
                ...prev,
                category: "camera",
                subCategory: "can't ping camera",
              }));
              navigate(`/services/${category}/cant-ping-camera/qr`);
            }}
          >
            <IoAlertCircleOutline size={103} /> Can't Ping Camera
          </button>
        </>
      )}

      {category === "gps" && (
        <>
          <button
            className="rectangle-button"
            onClick={() => {
              setIssue((prev) => ({
                ...prev,
                category: "gps",
                subCategory: "gps not connecting",
              }));
              navigate(`/services/${category}/gps-not-connecting/qr`);
            }}
          >
            <IoNavigateOutline size={113} /> GPS Not Connecting
          </button>
          <button
            className="rectangle-button"
            onClick={() => {
              setIssue((prev) => ({
                ...prev,
                category: "gps",
                subCategory: "innacurate gps coordinates",
              }));
              navigate(`/services/${category}/inaccurate-gps/qr`);
            }}
          >
            <IoLocateOutline size={113} /> Inaccurate GPS Coordinates
          </button>
          <button
            className="rectangle-button"
            onClick={() => {
              setIssue((prev) => ({
                ...prev,
                category: "gps",
                subCategory: "other",
              }));
              navigate(`/explanation`);
            }}
          >
            <IoHelpCircleOutline size={113} /> Other
          </button>
        </>
      )}

      {category === "canbus" && (
        <>
          <button
            className="rectangle-button"
            onClick={() => {
              setIssue((prev) => ({
                ...prev,
                category: "canbus",
                subCategory: "not communicating with module(s)",
              }));
              navigate(`/explanation`);
            }}
          >
            <IoCloseCircleOutline size={153} /> Not Communicating with Module(s)
          </button>
          <button
            className="rectangle-button"
            onClick={() => {
              setIssue((prev) => ({
                ...prev,
                category: "canbus",
                subCategory: "no power",
              }));
              navigate(`/services/${category}/canbus-no-power/qr`);
            }}
          >
            <IoAlertCircleOutline size={83} /> No Power
          </button>
          <button
            className="rectangle-button"
            onClick={() => {
              setIssue((prev) => ({
                ...prev,
                category: "canbus",
                subCategory: "unknown CAN bus error",
              }));
              navigate(`/services/${category}/canbus-error/qr`);
            }}
          >
            <IoHelpCircleOutline size={113} /> Unknown CAN Bus Error
          </button>
        </>
      )}

      <Outlet />
    </div>
  );
}

export default ServiceDetails;
