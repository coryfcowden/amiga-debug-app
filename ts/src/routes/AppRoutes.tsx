import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Autoplot from '../pages/Autoplot';
import Hardware from '../pages/Hardware';
import Interface from '../pages/Interface';
import QR from '../pages/QR';
import Services from '../pages/Services';
import Misc from '../pages/Misc';
import ImmediateAssistance from '../pages/ImmediateAssistance';
import ServiceDetails from '../pages/ServiceDetails';
import MiscDetails from '../pages/MiscDetails';
import Background from '../pages/Background';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Background/>} /> 

      <Route path="/report" element={<Home />} />

      <Route path="/autoplot" element={<Autoplot />}>
        <Route path=":qrId" element={<QR />} />
      </Route>

      <Route path="/hardware" element={<Hardware />}>
        <Route path=":qrId" element={<QR />} />
      </Route>

      <Route path="/interface" element={<Interface />}>
        <Route path=":qrId" element={<QR />} />
      </Route>

      <Route path="/services" element={<Services />}>
        <Route path=":serviceName" element={<ServiceDetails />}>
          <Route path="qr" element={<QR />} />
        </Route>
      </Route>

      <Route path="/misc" element={<Misc />}>
        <Route path=":miscName" element={<MiscDetails />}>
          <Route path="qr" element={<QR />} />
        </Route>
      </Route>

      <Route path="/immediate-assistance" element={<ImmediateAssistance />} />
    </Routes>
  );
}

export default AppRoutes;