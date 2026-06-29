const request = require("postman-request");
require("dotenv").config();
const apiKey = process.env.API_KEY;

const geocode = (address, callback) => {
  request(
    {
      url:
        "https://nominatim.openstreetmap.org/search?q=" +
        address +
        "&format=json",
      json: true,
      headers: { "User-Agent": "my-weather-app" },
    },
    (error, { body } = {}) => {
      if (error) {
        callback("Couldn't reach Nominatim API.", undefined);
      } else if (!body || body.length === 0) {
        callback("Unable to find location.", undefined);
      } else {
        callback(undefined, {
          latitude: body[0].lat,
          longitude: body[0].lon,
          display_name: body[0].display_name,
        });
      }
    },
  );
};

const forecast = (latitude, longitude, callback) => {
  const weatherURL =
    "http://api.weatherstack.com/current?access_key=" +
    apiKey +
    "&query=" +
    latitude +
    "," +
    longitude;

  request({ url: weatherURL, json: true }, (error, { body }) => {
    if (error) {
      callback("Couldn't reach WeatherStack API.", undefined);
    } else if (body.error) {
      callback("Unable to find location.", undefined);
    } else {
      callback(undefined, {
        weather_description: body.current.weather_descriptions[0],
        temperature: body.current.temperature,
        feelsLike: body.current.feelslike,
      });
    }
  });
};

module.exports = { geocode: geocode, forecast: forecast };

/*
    Errors are usually there when we really can't reach the API.
    If the API could be reached but we obtain an error back from 
    the API itself, that's going to go back in the response. Thus,
    It could be useful to try to get errors in the browsers and react
    accordingly to the structure of the error response we get. 
*/
