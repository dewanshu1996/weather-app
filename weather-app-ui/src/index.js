import ReactDOM from "react-dom";
import WeatherDataProvider from "./store/WeatherDataProvider";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <WeatherDataProvider>
    <App />
  </WeatherDataProvider>,
  document.getElementById("root")
);
