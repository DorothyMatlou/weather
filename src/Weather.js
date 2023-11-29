import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWater, faWind } from "@fortawesome/free-solid-svg-icons";
import img1 from "./weather.png";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <h1 id="location">Pretoria</h1>
          <button id="current-position">Current Position</button>
        </div>

        <div className="col-6">
          <h2 id="date">Monday</h2> <br /> <h2>14:00 pm</h2>
        </div>
      </div>

      <div className="container" style={{ border: "1px solid grey" }}>
        <div className="row">
          <div className="col">
            <div>
              <img
                src={img1}
                alt="weatherIcon"
                className="weather-icon float-left"
                width="45px"
                id="weather-icon"
              ></img>
            </div>
            <div className="float-left">
              <span className="weather-temp" id="temperature">
                24°C|°F
              </span>
            </div>
            <div id="description">Cloudy</div>
          </div>
          <div className="col" id="weather-details">
            <div>
              <FontAwesomeIcon icon={faWater} />
              <div>
                <span id="humidity">80%</span>
                <p id="details">Humidity</p>
              </div>
            </div>
          </div>
          <div className="col" id="weather-details">
            <div>
              <FontAwesomeIcon icon={faWind} />
              <div>
                <span id="wind-speed">2.4 Km/h</span>
                <p id="details">Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
