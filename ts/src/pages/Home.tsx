import { useNavigate } from "react-router-dom";
import { VscChromeClose, VscFileBinary, VscTerminalPowershell } from "react-icons/vsc";
import { IoAnalyticsOutline, IoCameraOutline, IoNavigateOutline, IoSettingsOutline, IoWifiSharp } from "react-icons/io5";
import { FaFilter, FaNetworkWired } from "react-icons/fa";



function Home() {
  const navigate = useNavigate();

  return (
    <div className="popup-container">

      <button className="exit-button" onClick={() => navigate('/')}>
        Exit <VscChromeClose />
      </button>

      <h1 className="popup-title">Report Issue</h1>

      <div className="options-grid">
        <button className="square-button" onClick={() => navigate('/autoplot')}>
            <IoAnalyticsOutline size={144}/> 
            Autoplot
        </button>

        <button className="square-button" onClick={() => navigate('/hardware')}>
            <IoSettingsOutline size={144}/>
            Hardware
        </button>

        <button className="square-button" onClick={() => navigate('/interface')}>
            <VscTerminalPowershell size={144}/>
            Interface
        </button>

        <button className="square-button" onClick={() => navigate('/services')}>
            <span>
            <VscFileBinary size={72}/> 
            <IoCameraOutline size={72}/>
            <IoNavigateOutline size={72}/> 
            </span>
            Services
        </button>

        <button className="square-button" onClick={() => navigate('/misc')}>
          <span>
            <FaNetworkWired size={72}/> 
            <IoWifiSharp size={72}/>
            <FaFilter size={56}/> 
          </span>
            Misc.
        </button>
      </div>
    </div>
  );
}

export default Home;
