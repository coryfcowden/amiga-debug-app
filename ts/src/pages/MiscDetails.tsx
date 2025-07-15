import { useNavigate, Outlet, useParams } from "react-router-dom";

function MiscDetails() {
  const { miscName } = useParams();
  const navigate = useNavigate();

  return (
    <div className="misc-details-container">
      <h5>{miscName?.toUpperCase()} Issue Options</h5>

      {miscName === "canbus" && (
        <>
          <button onClick={() => navigate(`/immediate-assistance`)}>
            Not Communicating with Module(s)
          </button>
          <button onClick={() => navigate(`/misc/${miscName}/qr`)}>
            No Power (QR)
          </button>
          <button onClick={() => navigate(`/misc/${miscName}/qr`)}>
            Unknown CAN Bus Error (QR)
          </button>
        </>
      )}

      {miscName === "filter" && (
        <>
          <button onClick={() => navigate(`/immediate-assistance`)}>
            Incorrect Calibration
          </button>
          <button onClick={() => navigate(`/immediate-assistance`)}>
            Filter Error
          </button>
          <button onClick={() => navigate(`/immediate-assistance`)}>
            Other
          </button>
        </>
      )}

      {miscName === "wifi" && (
        <>
          <button onClick={() => navigate(`/immediate-assistance`)}>
            Wifi not Connecting
          </button>
          <button onClick={() => navigate(`/immediate-assistance`)}>
            Poor Connection
          </button>
          <button onClick={() => navigate(`/immediate-assistance`)}>
            Cannot Connect to Farm Network
          </button>
        </>
      )}

      {miscName === "other" && (
        <>
          <button onClick={() => navigate(`/immediate-assistance`)}>
            Reboot Error
          </button>
          <button onClick={() => navigate(`/misc/${miscName}/qr`)}>
            Unknown Error Code (QR)
          </button>
          <button onClick={() => navigate(`/immediate-assistance`)}>
            Software Update Failure
          </button>
        </>
      )}

      <Outlet />

      <br />
      <button onClick={() => navigate("/misc")}>Back to misc</button>
    </div>
  );
}

export default MiscDetails;
