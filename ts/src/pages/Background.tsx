import { useNavigate } from 'react-router-dom';
import { VscReport } from 'react-icons/vsc';

function Background() {
  const navigate = useNavigate();

  return (
    <div className="background-wrapper">

      <div className="top-bar">

        <button className="report-button" 
          onClick={() => navigate('/report')}>
          <VscReport size={24}/> Report
        </button>

      </div>
      
    </div>
  );
}

export default Background;