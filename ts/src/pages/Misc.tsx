import { FaFilter, FaNetworkWired } from "react-icons/fa";
import { IoHelpCircleOutline, IoWifiSharp } from "react-icons/io5";
import { VscArrowLeft, VscChromeClose } from "react-icons/vsc";
import { useNavigate, Outlet, useParams } from "react-router-dom";

function Misc() {
  const navigate = useNavigate();
  const params = useParams();

  const miscSelected = params.category;

  return (
    <div className="popup-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <VscArrowLeft /> Back
      </button>

      <button className="exit-button" onClick={() => navigate("/")}>
        Exit <VscChromeClose />
      </button>

      <h1 className="popup-title">Report Issue</h1>

      {!miscSelected && (
        <>
          <div className="options-row">
            <button
              className="square-button"
              onClick={() => navigate("/misc/canbus")}
            >
              <FaNetworkWired size={144} /> CAN Bus
            </button>
            <button
              className="square-button"
              onClick={() => navigate("/misc/filter")}
            >
              <FaFilter size={120} /> Filter
            </button>
          </div>
          <div className="options-row">
            <button
              className="square-button"
              onClick={() => navigate("/misc/wifi")}
            >
              <IoWifiSharp size={144} /> Wifi
            </button>
            <button
              className="square-button"
              onClick={() => navigate("/misc/other")}
            >
              <IoHelpCircleOutline size={144} /> Other
            </button>
          </div>
        </>
      )}

      <Outlet />
    </div>
  );
}

export default Misc;
