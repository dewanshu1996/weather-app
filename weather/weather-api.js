const request = require("request");
const yargs = require("yargs");

const getWeather = (location, callback) => {
  const weatherApiUrl = `http://api.weatherstack.com/current?access_key=9f6933b3b9d57f2df1f9915c8381cd25&query=${location.latitude},${location.longitude}&units=m`;

  console.log(weatherApiUrl);
  request({ url: weatherApiUrl }, (error, response) => {
    if (error) callback("Unable to connect to host", undefined);
    else {
      try {
        const json = JSON.parse(response.body);
        callback(undefined, json);
      } catch (e) {
        callback("Exception", undefined);
      }
    }
  });
};

const getGeoTag = (placeName, callback) => {
  const geoTagApiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${placeName}.json?access_token=pk.eyJ1IjoiZGV3YW5zaHUxOTk2IiwiYSI6ImNrbndzc2hrNTB6amEydnFucWRjM3d4c2MifQ.SXigOui6DWi4oFjV88BqlQ&limit=1`;
  request({ url: geoTagApiUrl, json: true }, (error, response) => {
    console.log(request.body)
    if (error) callback("Unable to connect to host", undefined);
    else if (response.body.features.length == 0)
      callback("invalid place name", undefined);
    else {
      const body = response.body;
      const [longitude, latitude] = body.features[0].center;
      console.log(longitude);
      console.log(latitude);
      callback(undefined, { longitude: longitude, latitude: latitude });
    }
  });
};

const getTheWeatherPlease = (locationName, callback) => {
  getGeoTag(locationName, (error, response) => {
    console.log(error);
    if (error === undefined) {
      getWeather(response, (error, response) => {
        if (error == undefined) {
          callback(undefined, response);
        } else callback("error", undefined);
      });
    }
  });
};

module.exports = getTheWeatherPlease;
