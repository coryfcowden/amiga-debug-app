import { useNavigate, Outlet, useParams } from 'react-router-dom';

function Misc() {
  const navigate = useNavigate();
  const params = useParams();

  const miscSelected = params.miscName;

  return (
    <div className="misc-container">
      <button onClick={() => navigate('/')}>Exit</button>

      {!miscSelected && (
        <>
          <h5>Misc Issue Options</h5>

          <button onClick={() => navigate('/misc/canbus')}>
            CAN Bus
          </button>
          <button onClick={() => navigate('/misc/filter')}>
            Filter
          </button>
          <button onClick={() => navigate('/misc/wifi')}>
            Wifi
          </button>
          <button onClick={() => navigate('/misc/other')}>
            Other
          </button>
        </>
      )}

      <Outlet />

      <br />
      <button onClick={() => navigate('/')}>Home</button>
    </div>
  );
}

export default Misc;
