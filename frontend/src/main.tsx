import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { IssueReportProvider } from "./context/IssueReportContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <IssueReportProvider>
        <App />
      </IssueReportProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
