import { useNavigate, Outlet } from "react-router-dom";
import { VscArrowLeft, VscChromeClose } from "react-icons/vsc";
import { IoCropSharp } from "react-icons/io5";

function Hardware() {
  const navigate = useNavigate();

  return (
    <div className="popup-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <VscArrowLeft /> Back
      </button>

      <button className="exit-button" onClick={() => navigate("/")}>
        Exit <VscChromeClose />
      </button>

      <h1 className="popup-title">Hardware Issue Options</h1>

      <button
        className="rectangle-button"
        onClick={() => navigate("/hardware/qr-1")}
      >
        <IoCropSharp size={113} /> Robot Geometry
      </button>

      <button
        className="rectangle-button"
        onClick={() => navigate("/immediate-assistance")}
      >
        <span>Misalignment</span>
      </button>

      <button
        className="rectangle-button"
        onClick={() => navigate("/immediate-assistance")}
      >
        <span>Broken Part</span>
      </button>

      <Outlet />
    </div>
  );
}

export default Hardware;
