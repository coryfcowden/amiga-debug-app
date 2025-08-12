import {
  IoCameraReverseOutline,
  IoCloseCircleOutline,
  IoHelpCircleOutline,
  IoLocateOutline,
  IoNavigateOutline,
} from "react-icons/io5";
import { VscArrowLeft, VscChromeClose } from "react-icons/vsc";
import { useNavigate, Outlet, useParams } from "react-router-dom";

function ServiceDetails() {
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

      {category === "camera" && (
        <>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/explanation`)}
          >
            <IoCloseCircleOutline size={113} /> No Power to Camera
          </button>
          <button
            className="rectangle-button"
            onClick={() =>
              navigate(`/services/${category}/camera-feed-frozen/qr`)
            }
          >
            <IoCameraReverseOutline size={113} /> Camera Feed Frozen
          </button>
          <button
            className="rectangle-button"
            onClick={() =>
              navigate(`/services/${category}/cant-ping-camera/qr`)
            }
          >
            <IoCloseCircleOutline size={113} /> Camera not Working
          </button>
        </>
      )}

      {category === "gps" && (
        <>
          <button
            className="rectangle-button"
            onClick={() =>
              navigate(`/services/${category}/gps-not-connecting/qr`)
            }
          >
            <IoNavigateOutline size={113} /> GPS Not Connecting
          </button>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/services/${category}/inaccurate-gps/qr`)}
          >
            <IoLocateOutline size={113} /> Inaccurate GPS Coordinates
          </button>
          <button
            className="rectangle-button"
            onClick={() => navigate(`/explanation`)}
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
