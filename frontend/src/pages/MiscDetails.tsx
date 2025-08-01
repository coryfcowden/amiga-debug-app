import {
  IoAlertCircleOutline,
  IoCloseCircleOutline,
  IoHelpCircleOutline,
  IoWifiSharp,
} from "react-icons/io5";
import { VscArrowLeft, VscChromeClose, VscSyncIgnored } from "react-icons/vsc";
import { useNavigate, Outlet, useParams } from "react-router-dom";

function MiscDetails() {
  const { category } = useParams();
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

      {category === "canbus" && (
        <>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/explanation`)}
          >
            <IoCloseCircleOutline size={153} /> Not Communicating with Module(s)
          </button>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/misc/${category}/canbus-no-power/qr`)}
          >
            <IoAlertCircleOutline size={83} /> No Power
          </button>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/misc/${category}/canbus-error/qr`)}
          >
            <IoHelpCircleOutline size={113} /> Unknown CAN Bus Error
          </button>
        </>
      )}

      {category === "filter" && (
        <>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/misc/${category}/filter-calibration/qr`)}
          >
            <IoCloseCircleOutline size={113} /> Incorrect Calibration
          </button>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/misc/${category}/filter-error/qr`)}
          >
            <IoAlertCircleOutline size={113} /> Filter Error
          </button>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/explanation`)}
          >
            <IoHelpCircleOutline size={113} /> Other
          </button>
        </>
      )}

      {category === "wifi" && (
        <>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/explanation`)}
          >
            <IoWifiSharp size={113} /> Wifi not Connecting
          </button>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/explanation`)}
          >
            <IoAlertCircleOutline size={113} /> Poor Connection
          </button>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/explanation`)}
          >
            <IoCloseCircleOutline size={113} /> Cannot Connect to Farm Network
          </button>
        </>
      )}

      {category === "other" && (
        <>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/explanation`)}
          >
            <VscSyncIgnored size={113} /> Reboot Error
          </button>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/misc/${category}/unknown-error/qr`)}
          >
            <IoHelpCircleOutline size={113} /> Unknown Error Code
          </button>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/explanation`)}
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
