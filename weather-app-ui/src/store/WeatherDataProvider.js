import { React, useState } from "react";
import weatherDataContext from "./weatherData";

const WEATHER_DATA = {
  locationName: "",
  weatherDescUrl: "",
  weatherDesc: "",
  currentemperature: "",
  feelsLike: "",
  precipitationChance: "",
};

const WeatherDataProvider = (props) => {
  const [weatherData, changeWeatherData] = useState(WEATHER_DATA);
  const weatherDataCo = {
    weatherData: weatherData,
    changeWeatherData: changeWeatherData,
  };

  return (
    <weatherDataContext.Provider value={weatherDataCo}>
      {props.children}
    </weatherDataContext.Provider>
  );
};

export default WeatherDataProvider;
