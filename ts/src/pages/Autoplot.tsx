import { useNavigate, Outlet } from 'react-router-dom';
import { VscArrowLeft } from 'react-icons/vsc';

function Autoplot() {
  const navigate = useNavigate();

  return (
    <div className="popup-container">
      <button className="back-button" onClick={() => navigate('/')}>
        <VscArrowLeft /> Back 
      </button>

      <button className="exit-button" onClick={() => navigate('/')}>
        Exit
      </button>

      <h1 className="popup-title">Report Issue</h1>

      <button className="rectangle-button" onClick={() => navigate('/immediate-assistance')}>
        Path not Smooth
      </button>

      <button className="rectangle-button" onClick={() => navigate('/autoplot/qr-1')}>
        Robot off Path
      </button>

      <button className="rectangle-button" onClick={() => navigate('/autoplot/qr-2')}>
        Robot will not Follow
      </button>

      <Outlet />
    </div>
  );
}

export default Autoplot;
