import { useNavigate, Outlet, useParams } from "react-router-dom";

function Services() {
  const navigate = useNavigate();
  const params = useParams();

  const serviceSelected = params.serviceName;

  return (
    <div className="services-container">
      <button onClick={() => navigate("/")}>Exit</button>

      {!serviceSelected && (
        <>
          <h5>Services Issue Options</h5>

          <button onClick={() => navigate("/services/recorder")}>
            Recorder
          </button>
          <button onClick={() => navigate("/services/camera")}>Camera</button>
          <button onClick={() => navigate("/services/gps")}>GPS</button>
        </>
      )}

      <Outlet />

      <br />
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}

export default Services;
