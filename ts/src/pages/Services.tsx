import { IoCameraOutline, IoNavigateOutline } from "react-icons/io5";
import { VscArrowLeft, VscChromeClose, VscFileBinary } from "react-icons/vsc";
import { useNavigate, Outlet, useParams } from "react-router-dom";

function Services() {
  const navigate = useNavigate();
  const params = useParams();

  const serviceSelected = params.serviceName;

  return (
    <div className="popup-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <VscArrowLeft /> Back
      </button>

      <button className="exit-button" onClick={() => navigate("/")}>
        Exit <VscChromeClose />
      </button>

      <h1 className="popup-title">Report Issue</h1>

      {!serviceSelected && (
        <>
          <button
            className="rectangle-button"
            onClick={() => navigate("/services/recorder")}
          >
            <VscFileBinary size={113} /> Recorder
          </button>
          <button
            className="rectangle-button"
            onClick={() => navigate("/services/camera")}
          >
            <IoCameraOutline size={113} /> Camera
          </button>
          <button
            className="rectangle-button"
            onClick={() => navigate("/services/gps")}
          >
            <IoNavigateOutline size={113} /> GPS
          </button>
        </>
      )}
      <Outlet />
    </div>
  );
}

export default Services;
