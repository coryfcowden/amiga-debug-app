import { useNavigate, Outlet, useParams } from "react-router-dom";

function ServiceDetails() {
  const { serviceName } = useParams();
  const navigate = useNavigate();

  return (
    <div className="service-details-container">
      <h5>{serviceName?.toUpperCase()} Issue Options</h5>

      {serviceName === "recorder" && (
        <>
          <button onClick={() => navigate(`/services/${serviceName}/qr`)}>
            Not Recording Data (QR)
          </button>
          <button onClick={() => navigate(`/immediate-assistance`)}>
            Incorrect Data
          </button>
          <button onClick={() => navigate(`/immediate-assistance`)}>
            Data Upload Failure
          </button>
        </>
      )}

      {serviceName === "camera" && (
        <>
          <button onClick={() => navigate(`/services/${serviceName}/qr`)}>
            Camera Not Working (QR)
          </button>
          <button onClick={() => navigate(`/immediate-assistance`)}>
            Camera Feed Frozen
          </button>
          <button onClick={() => navigate(`/immediate-assistance`)}>
            Cannot Detect Crops/Rows
          </button>
        </>
      )}

      {serviceName === "gps" && (
        <>
          <button onClick={() => navigate(`/services/${serviceName}/qr`)}>
            GPS Not Working (QR)
          </button>
          <button onClick={() => navigate(`/immediate-assistance`)}>
            Inaccurate GPS Coordinates
          </button>
          <button onClick={() => navigate(`/immediate-assistance`)}>
            Other
          </button>
        </>
      )}

      <Outlet />

      <br />
      <button onClick={() => navigate("/services")}>Back to Services</button>
    </div>
  );
}

export default ServiceDetails;
