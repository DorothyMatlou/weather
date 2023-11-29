import "./App.css";
import Search from "./Search.js";
import Weather from "./Weather.js";
import Forecast from "./Forecast.js";

function App() {
  return (
    <div className="App">
      <div className="container" style={{ border: "1px solid grey" }}>
        <Search />
        <Weather />
        <Forecast />
      </div>
    </div>
  );
}

export default App;
