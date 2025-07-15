import ExitButton from "./components/ExitButton";
import AppRoutes from "./routes/AppRoutes";
import "./styling/Styling.css";

function App() {
  return (
    <div className="App">
      <div className="background-wrapper">
        <div className="background-overlay"></div>
        <AppRoutes />
        <ExitButton />
      </div>
    </div>
  );
}

export default App;
