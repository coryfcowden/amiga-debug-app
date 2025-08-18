import { useNavigate } from "react-router-dom";
import { VscChromeClose, VscTerminalPowershell } from "react-icons/vsc";
import {
  IoAnalyticsOutline,
  IoCameraOutline,
  IoHelpCircleOutline,
  IoNavigateOutline,
  IoSettingsOutline,
  IoWifiSharp,
} from "react-icons/io5";
import { FaFilter, FaNetworkWired } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="popup-container">
      <button className="exit-button" onClick={() => navigate("/")}>
        Exit <VscChromeClose />
      </button>

      <h1 className="popup-title">Report Issue</h1>

      <div className="options-grid">
        <div className="options-row">
          <button
            className="square-button"
            onClick={() => navigate("/autoplot")}
          >
            <IoAnalyticsOutline size={144} />
            Autoplot
          </button>

          <button
            className="square-button"
            onClick={() => navigate("/hardware")}
          >
            <IoSettingsOutline size={144} />
            Hardware
          </button>
        </div>

        <div className="options-row">
          <button
            className="square-button"
            onClick={() => navigate("/interface")}
          >
            <VscTerminalPowershell size={144} />
            Interface
          </button>

          <button
            className="square-button"
            onClick={() => navigate("/services")}
          >
            <span>
              <FaNetworkWired size={70} />
              <IoCameraOutline size={72} />
              <IoNavigateOutline size={60} />
            </span>
            Services
          </button>

          <button className="square-button" onClick={() => navigate("/misc")}>
            <span>
              <IoWifiSharp size={72} />
              <FaFilter size={56} />
              <IoHelpCircleOutline size={65} />
            </span>
            Misc.
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
