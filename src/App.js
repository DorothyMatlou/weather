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
        <span class="source-code">
          <a href="https://github.com/DorothyMatlou/weather">
            <small>Open-Source-Code </small>
          </a>
          by Dorothy Maleka
        </span>
      </div>
    </div>
  );
}

export default App;
