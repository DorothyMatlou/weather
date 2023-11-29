import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Forecast() {
  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  async function getForecast(coordinates) {
    let apiKey = "597c40c39084687093b091cd48b366f8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    const forecastData = data.daily;
    showForecast(forecastData);
  }

  function showForecast(response) {
    let forecast = response;
    let forecastElement = document.querySelector("#forecast");
    let forecastHTML = `<div class="row">`;

    forecast.forEach(function (forecastDay, index) {
      if (index < 6) {
        forecastHTML += `
          <div class="col-2">
            <div class="weather-forecast-date">${formatDay(
              forecastDay.dt
            )}</div>
            <div class="weather-forecast-image">
              <img src="https://openweathermap.org/img/wn/${
                forecastDay.weather[0].icon
              }@2x.png" width="36px">
            </div>
            <div class="weather-forecast-temperatures">
              <span class="weather-forecast-temperature-max">${Math.round(
                forecastDay.temp.max
              )}°</span>
              <span class="weather-forecast-temperature-min">${Math.round(
                forecastDay.temp.min
              )}°</span>
            </div>
          </div>
        `;
      }
    });

    forecastHTML += `</div>`;
    forecastElement.innerHTML = forecastHTML;
  }

  useEffect(() => {
    const coordinates = { lat: 0, lon: 0 };
    getForecast(coordinates);
  });
  return <div className="weather-forecast" id="forecast"></div>;
}
