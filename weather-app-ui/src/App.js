import { useState, Fragment, useContext } from "react";
import Header from "./componants/header/Header";
import LocationInputForm from "./componants/main/LocationInputForm";
import WeatherTab from "./componants/main/WeatherTab";
import WeatherData from "./store/weatherData";
import WeatherDataProvider from "./store/WeatherDataProvider";

let weatherDataStructure = {
  locationName: "",
  weatherDescUrl: "",
  weatherDesc: "",
  currentemperature: "",
  feelsLike: "",
  precipitationChance: "",
};

const App = () => {
  const weatherDataCtx = useContext(WeatherData);
  const [showWeather, setShowWeather] = useState(false);

  const locationSubmitHandler = (locationNameLocal) => {
    setShowWeather(false);
    fetch(`/get-weather?address=${locationNameLocal}`)
      .then((response) => response.json())
      .then((data) => {
        weatherDataStructure.currentemperature =
          data.weather.current.temperature;
        weatherDataStructure.feelsLike = data.weather.current.feelslike;
        weatherDataStructure.locationName = data.weather.location.name;
        weatherDataStructure.weatherDescUrl =
          data.weather.current.weather_icons[0];
        weatherDataStructure.weatherDesc =
          data.weather.current.weather_descriptions[0];
        weatherDataStructure.precipitationChance = data.weather.current.precip;
        weatherDataCtx.changeWeatherData(weatherDataStructure);
        setShowWeather(true);
      });
  };

  return (
    <Fragment>
      <Header />
      <LocationInputForm onLocationSubmit={locationSubmitHandler} />
      {showWeather && <WeatherTab res={weatherDataCtx.weatherData}/>}
    </Fragment>
  );
};

export default App;
