import weatherDataContext from "../../store/weatherData";
import classes from "./WeatherTab.module.css";
import { useContext, useEffect, useState } from "react";

const WeatherTab = (props) => {
  const [weatherData, setWeatherData] = useState(props);

  useEffect(() => {
    setWeatherData(props);
  }, [props]);

  return (
    <div className={classes.container}>
      <h3> {props.res.locationName} </h3>
      <div className={classes.main}>
        <img src={props.res.weatherDescUrl} alt="Weather picture" />
        <div>
          <span> Current temperature {props.res.currentemperature}</span>
          <br />
          <span>feels like {props.res.feelsLike}</span> <br />
          <span>Chance of rain{props.res.precipitationChance}</span>
        </div>
      </div>
      <div className={classes.end}>
        <span>
          {" "}
          Todays, weather in {props.res.locationName} is
          {props.res.currentemperature} and {props.res.weatherDesc}{" "}
        </span>
      </div>
    </div>
  );
};

export default WeatherTab;
