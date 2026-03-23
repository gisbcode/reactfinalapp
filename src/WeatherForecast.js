import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState([]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (!props.coordinates) return null;

  if (!loaded) {
    const apiKey = "39a3014fd34afe90bc14c4tc7oed280d";
    const lat = props.coordinates.lat;
    const lon = props.coordinates.lon;

    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading forecast...";
  }

  function mapIcon(iconCode) {
    const iconMap = {
      "01d": "CLEAR_DAY",
      "01n": "CLEAR_NIGHT",
      "02d": "PARTLY_CLOUDY_DAY",
      "02n": "PARTLY_CLOUDY_NIGHT",
      "03d": "CLOUDY",
      "04d": "CLOUDY",
      "09d": "RAIN",
      "10d": "RAIN",
      "11d": "SLEET",
      "13d": "SNOW",
      "50d": "FOG",
    };

    return iconMap[iconCode] || "CLEAR_DAY";
  }

  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  }

  return (
    <div className="Forecast">
      <div className="row">
        {forecast.slice(1, 6).map(function (day, index) {
          return (
            <div className="col" key={index}>
              <div>{formatDay(day.dt)}</div>

              <ReactAnimatedWeather
                icon={mapIcon(day.weather[0].icon)}
                size={40}
                animate={true}
              />

              <div>
                {Math.round(day.temp.max)}° / {Math.round(day.temp.min)}°
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
