import { FaSeedling } from "react-icons/fa";
import {
  IoCameraReverseOutline,
  IoCloseCircleOutline,
  IoCloudUploadOutline,
  IoHelpCircleOutline,
  IoLocateOutline,
  IoNavigateOutline,
} from "react-icons/io5";
import {
  VscArrowLeft,
  VscChromeClose,
  VscDatabase,
  VscFileBinary,
} from "react-icons/vsc";
import { useNavigate, Outlet, useParams } from "react-router-dom";

function ServiceDetails() {
  const { serviceName } = useParams();
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

      {serviceName === "recorder" && (
        <>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/services/${serviceName}/qr`)}
          >
            <VscFileBinary size={113} /> Not Recording Data
          </button>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/immediate-assistance`)}
          >
            <VscDatabase size={113} /> Inaccurate Data
          </button>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/immediate-assistance`)}
          >
            <IoCloudUploadOutline size={113} /> Data Upload Failure
          </button>
        </>
      )}

      {serviceName === "camera" && (
        <>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/services/${serviceName}/qr`)}
          >
            <IoCloseCircleOutline size={113} /> No Power to Camera
          </button>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/immediate-assistance`)}
          >
            <IoCameraReverseOutline size={113} /> Camera Feed Frozen
          </button>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/immediate-assistance`)}
          >
            <FaSeedling size={113} /> Cannot Detect Crops/Rows
          </button>
        </>
      )}

      {serviceName === "gps" && (
        <>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/services/${serviceName}/qr`)}
          >
            <IoNavigateOutline size={113} /> GPS Not Working
          </button>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/immediate-assistance`)}
          >
            <IoLocateOutline size={113} /> Inaccurate GPS Coordinates
          </button>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/immediate-assistance`)}
          >
            <IoHelpCircleOutline size={113} /> Other
          </button>
        </>
      )}

      <Outlet />
    </div>
  );
}

export default ServiceDetails;
