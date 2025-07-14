import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Autoplot from '../pages/Autoplot';
import Hardware from '../pages/Hardware';
import Interface from '../pages/Interface';
import QR from '../pages/QR';
import Services from '../pages/Services';
import Misc from '../pages/Misc';
import ImmediateAssistance from '../pages/ImmediateAssistance';
import IssueReported from '../pages/IssueReported';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/autoplot" element={<Autoplot />} />
      <Route path="/hardware" element={<Hardware />} />

      <Route path="/interface" element={<Interface />}>
        <Route path=":qrId" element={<QR />} />
      </Route>

      <Route path="/services" element={<Services />}>
        <Route path=":serviceName/qr" element={<QR />} />
      </Route>

      <Route path="/misc" element={<Misc />}>
        <Route path=":miscItem/qr" element={<QR />} />
      </Route>

      <Route path="/immediate-assistance" element={<ImmediateAssistance />} />
      <Route path="/assistance" element={<ImmediateAssistance />} />
      <Route path="/issue-reported" element={<IssueReported />} />
    </Routes>
  );
}
