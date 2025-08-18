import { FaFilter } from "react-icons/fa";
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
          <button
            className="rectangle-button"
            onClick={() => navigate("/misc/filter")}
          >
            <FaFilter size={80} /> Filter
          </button>
          <button
            className="rectangle-button"
            onClick={() => navigate("/misc/wifi")}
          >
            <IoWifiSharp size={113} /> Wifi
          </button>
          <button
            className="rectangle-button"
            onClick={() => navigate("/misc/other")}
          >
            <IoHelpCircleOutline size={113} /> Other
          </button>
        </>
      )}

      <Outlet />
    </div>
  );
}

export default Misc;
