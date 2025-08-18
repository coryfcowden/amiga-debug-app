import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Autoplot from "../pages/Autoplot";
import Hardware from "../pages/Hardware";
import Interface from "../pages/Interface";
import QR from "../pages/QR";
import Services from "../pages/Services";
import ServiceDetails from "../pages/ServiceDetails";
import Misc from "../pages/Misc";
import MiscDetails from "../pages/MiscDetails";
import ImmediateAssistance from "../pages/ImmediateAssistance";
import Background from "../pages/Background";
import Explanation from "../pages/Explanation";
import Summary from "../pages/TestSummary";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Background />} />

      <Route path="/report" element={<Home />} />

      <Route path="/autoplot" element={<Autoplot />} />
      <Route path="/autoplot/:issue/qr" element={<QR />} />

      <Route path="/hardware" element={<Hardware />} />
      <Route path="/hardware/:issue/qr" element={<QR />} />

      <Route path="/interface" element={<Interface />} />
      <Route path="/interface/:issue/qr" element={<QR />} />

      <Route path="/services" element={<Services />} />
      <Route path="/services/:category" element={<ServiceDetails />} />
      <Route path="/services/:category/:issue/qr" element={<QR />} />

      <Route path="/misc" element={<Misc />} />
      <Route path="/misc/:category" element={<MiscDetails />} />
      <Route path="/misc/:category/:issue/qr" element={<QR />} />

      <Route path="/explanation" element={<Explanation />}></Route>

      <Route path="/immediate-assistance" element={<ImmediateAssistance />} />

      {/* TEST to preview email: TestSummary page */}
      <Route path="/summary" element={<Summary />} />
    </Routes>
  );
}

export default AppRoutes;
