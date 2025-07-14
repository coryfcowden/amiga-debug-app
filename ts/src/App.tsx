import ExitButton from "./components/ExitButton";
import AppRoutes from "./routes/AppRoutes";
import "./styling/Styling.css";

function App() {
  return (
    <div className="App">

      <AppRoutes /> 

      <ExitButton />
    </div>
  );
}

export default App;
