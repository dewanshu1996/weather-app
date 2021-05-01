const express = require("express");
const getTheWeatherPlease = require("./weather/weather-api");
const chalk = require("chalk");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/home", (req, res) => {
  res.send("Welcome to express");
});

app.get("/get-weather", (req, res) => {
  console.log("reached to server");
  getTheWeatherPlease(req.query.address, (error, response) => {
    res.setHeader("Content-Type", "application/json");
    if (error) {
      res.end(
        JSON.stringify({
          weather: "",
          status: "0",
        })
      );
    } else {
      res.end(JSON.stringify({ weather: response, status: "1" }));
    }
  });
});

app.listen(3080, () => {
  console.log(chalk.green("Surver is up and running"));
});
