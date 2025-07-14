import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ImmediateAssistance() {
  const [outcome, setOutcome] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div className="immediate-assistance-container">
        <button onClick={() => navigate('/')}>
                Exit
            </button>

      {!outcome && (
        <>
          <p>Do you need immediate assistance?</p>
          <button onClick={() => setOutcome('yes')}>Yes</button>
          <button onClick={() => setOutcome('no')}>No, just report issue</button>
        </>
      )}

      {outcome === 'yes' && (
        <>
          <p>A Farm-ng member will reach out to you ASAP!</p>
          <button onClick={() => navigate('/')}>Home</button>
        </>
      )}

      {outcome === 'no' && (
        <>
          <p>Issue reported!</p>
            <button onClick={() => navigate('/')}>Home</button>        </>
      )}
    </div>
  );
}

export default ImmediateAssistance;
