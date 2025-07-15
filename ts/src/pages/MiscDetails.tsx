import {
  IoAlertCircleOutline,
  IoCloseCircle,
  IoCloseCircleOutline,
  IoHelpCircleOutline,
  IoWifiOutline,
  IoWifiSharp,
} from "react-icons/io5";
import { VscArrowLeft, VscChromeClose, VscSyncIgnored } from "react-icons/vsc";
import { useNavigate, Outlet, useParams } from "react-router-dom";

function MiscDetails() {
  const { miscName } = useParams();
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

      {miscName === "canbus" && (
        <>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/immediate-assistance`)}
          >
            <IoCloseCircleOutline size={113} /> Not Communicating with Module(s)
          </button>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/misc/${miscName}/qr`)}
          >
            <IoAlertCircleOutline size={113} /> No Power
          </button>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/misc/${miscName}/qr`)}
          >
            <IoHelpCircleOutline size={113} /> Unknown CAN Bus Error
          </button>
        </>
      )}

      {miscName === "filter" && (
        <>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/immediate-assistance`)}
          >
            <IoCloseCircleOutline size={113} /> Incorrect Calibration
          </button>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/immediate-assistance`)}
          >
            <IoAlertCircleOutline size={113} /> Filter Error
          </button>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/immediate-assistance`)}
          >
            <IoHelpCircleOutline size={113} /> Other
          </button>
        </>
      )}

      {miscName === "wifi" && (
        <>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/immediate-assistance`)}
          >
            <IoWifiSharp size={113} /> Wifi not Connecting
          </button>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/immediate-assistance`)}
          >
            <IoAlertCircleOutline size={113} /> Poor Connection
          </button>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/immediate-assistance`)}
          >
            <IoCloseCircleOutline size={113} /> Cannot Connect to Farm Network
          </button>
        </>
      )}

      {miscName === "other" && (
        <>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/immediate-assistance`)}
          >
            <VscSyncIgnored size={113} /> Reboot Error
          </button>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/misc/${miscName}/qr`)}
          >
            <IoHelpCircleOutline size={113} /> Unknown Error Code
          </button>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/immediate-assistance`)}
          >
            <IoCloseCircleOutline size={113} /> Software Update Failure
          </button>
        </>
      )}

      <Outlet />
    </div>
  );
}

export default MiscDetails;
