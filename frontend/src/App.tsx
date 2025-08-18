import AppRoutes from "./routes/AppRoutes";
import "./styling/Styling.css";

function App() {
  return (
    <div className="App">
      <div className="background-wrapper">
        <div className="background-overlay"></div>
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
