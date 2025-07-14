import { useNavigate, Outlet } from 'react-router-dom';

function Interface({}) {
    const navigate = useNavigate();

    return (
        <div className="interface-container">
            <button onClick={() => navigate('/')}>Exit</button>

            <h5>Interface Issue Options</h5>

            <button onClick={() => navigate('/interface/qr-1')}>
                App(s) Disappeared (QR)
            </button>

            <button onClick={() => navigate('/interface/qr-2')}>
                Random Popups (QR)
            </button>

            <button onClick={() => navigate('/immediate-assistance')}>
                Unresponsive
            </button>

            <Outlet />

            <br />
            <button onClick={() => navigate('/')}>Home</button>
        </div>
    );
}

export default Interface;