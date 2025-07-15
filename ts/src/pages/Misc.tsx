import { VscArrowLeft, VscChromeClose } from "react-icons/vsc";
import { useNavigate, Outlet, useParams } from "react-router-dom";

function Misc() {
  const navigate = useNavigate();
  const params = useParams();

  const miscSelected = params.miscName;

  return (
    <div className="popup-container">
      <button className="back-button" onClick={() => navigate("/report")}>
        <VscArrowLeft /> Back
      </button>

      <button className="exit-button" onClick={() => navigate("/")}>
        Exit <VscChromeClose />
      </button>

      <h1 className="popup-title">Report Issue</h1>

      {!miscSelected && (
        <>
          <button
            className="square-button"
            onClick={() => navigate("/misc/canbus")}
          >
            CAN Bus
          </button>
          <button
            className="square-button"
            onClick={() => navigate("/misc/filter")}
          >
            Filter
          </button>
          <button
            className="square-button"
            onClick={() => navigate("/misc/wifi")}
          >
            Wifi
          </button>
          <button
            className="square-button"
            onClick={() => navigate("/misc/other")}
          >
            Other
          </button>
        </>
      )}

      <Outlet />
    </div>
  );
}

export default Misc;
