// import TopicMonitor from "./TopicMonitor";
import ExitButton from "./ExitButton";
import "./Styling.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Debug App</h1>
      </header>
      <p>
        Welcome to the Debug App! This application is designed to let you report issues and request support.
      </p>

      <ExitButton />

    </div>
  );
}

export default App;
