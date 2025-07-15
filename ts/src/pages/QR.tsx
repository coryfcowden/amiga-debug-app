import { useParams } from "react-router-dom";

function QR() {
  const params = useParams();

  return (
    <div className="qr-page">
      <h3>QR Page</h3>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  );
}

export default QR;
