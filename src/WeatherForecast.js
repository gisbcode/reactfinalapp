import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherDay from "./WeatherDay";

export default function WeatherForecast({ submittedCity }) {
  const [submittedCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setCity(props.defaultCity);
    search();
  }, []);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherDay data={dailyForecast} />
                </div>
              );
            } else return null;
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "39a3014fd34afe90bc14c4tc7oed280d";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${submittedCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
