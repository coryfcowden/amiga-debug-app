import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import { VscArrowLeft, VscArrowRight, VscChromeClose } from "react-icons/vsc";

function QR() {
  const { issue } = useParams();
  const navigate = useNavigate();

  const qrCodeMap: Record<string, { url: string; description: string }> = {
    // Autoplot
    "robot-off-path": {
      url: "https://amiga.farm-ng.com/docs/apps/autoplot_app/#troubleshooting",
      description: "Robot Off Path",
    },
    "robot-will-not-follow": {
      url: "https://amiga.farm-ng.com/docs/apps/autoplot_app/#troubleshooting",
      description: "Robot Will not Follow",
    },
    // Hardware
    "robot-geometry": {
      url: "https://amiga.farm-ng.com/docs/apps/launcher/#robot-geometry",
      description: "Robot Geometry",
    },
    // Interface
    "apps-disappeared": {
      url: "https://amiga.farm-ng.com/docs/brain/brain-apps-manifest#troubleshooting",
      description: "Apps Disappeared",
    },
    "random-popups": {
      url: "https://amiga.farm-ng.com/docs/reference/faq/#brain-app-development",
      description: "Random Popups",
    },
    unresponsive: {
      url: "https://discourse.farm-ng.com/t/display-is-not-so-responsive/513",
      description: "Unresponsive",
    },
    // Services
    "not-recording-data": {
      url: "https://amiga.farm-ng.com/docs/concepts/recorder_service/",
      description: "Recorder Not Recording Data",
    },
    "camera-feed-frozen": {
      url: "https://discourse.farm-ng.com/t/oak-camera-issue/339",
      description: "Camera Feed Frozen",
    },
    "gps-not-connecting": {
      url: "https://discourse.farm-ng.com/t/erroneous-filter-convergence-and-gps-not-working/324",
      description: "GPS Not Connecting",
    },
    "inaccurate-gps": {
      url: "https://discourse.farm-ng.com/t/gps-values-wandering-until-divergence/407",
      description: "Inaccurate GPS Coordinates",
    },
    // Misc
    "canbus-no-power": {
      url: "https://amiga.farm-ng.com/docs/hardware/electronics#can-bus",
      description: "CAN Bus No Power (SEE PRO TIP)",
    },
    "canbus-error": {
      url: "https://amiga.farm-ng.com/docs/dashboard/dashboard-debugging/",
      description: "Unknown CAN Bus Error",
    },
    "filter-error": {
      url: "https://discourse.farm-ng.com/t/erroneous-filter-convergence-and-gps-not-working/324",
      description: "Filter Error",
    },
    "filter-calibration": {
      url: "https://discourse.farm-ng.com/t/erroneous-filter-convergence-and-gps-not-working/324",
      description: "Filter Calibration",
    },
    "unknown-error": {
      url: "https://amiga.farm-ng.com/docs/dashboard/dashboard-debugging/",
      description: "Unknown Error Code",
    },

    // more qr codes here...
  };

  const qrData = qrCodeMap[issue || ""];

  useEffect(() => {
    if (!qrData) {
      navigate("/immediate-assistance");
    }
  }, [qrData, navigate]);

  if (!qrData) {
    return null; // Nothing to render while navigating away
  }

  return (
    <div className="popup-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <VscArrowLeft /> Back
      </button>

      <button className="exit-button" onClick={() => navigate("/")}>
        Exit <VscChromeClose />
      </button>

      <h1 className="popup-title">Report Issue</h1>

      <h1 className="popup-title">
        Scan this QR Code for relevant information on the Amiga Docs.
      </h1>

      <QRCodeSVG
        value={qrData.url}
        size={200}
        level="Q"
        bgColor="#ffffff"
        fgColor="#000000"
      />

      <p>{qrData.description}</p>

      <button
        className="qr-help-button"
        onClick={() => navigate("/immediate-assistance")}
      >
        <strong>I Need Help</strong> <VscArrowRight size={77} />
      </button>
    </div>
  );
}

export default QR;
