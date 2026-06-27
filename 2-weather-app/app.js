require("dotenv").config();
const apiKey = process.env.API_KEY;

const geocode = require("./utils.js");
geocode("Alcatraz", (error, response) => {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});

const lat = 0;
const lon = 0;
const weatherURL =
  "http://api.weatherstack.com/current?access_key=" +
  apiKey +
  "&query=" +
  lat +
  "," +
  lon;

request({ url: weatherURL, json: true }, (error, response) => {
  if (error) {
    console.log("Couldn't reach WeatherStack API.");
  } else if (response.body.error) {
    console.log("Unable to find location.");
  } else {
    console.log(
      response.body.current.weather_descriptions[0] +
        ". It is currently " +
        response.body.current.temperature +
        " degrees out. However, it feels like " +
        response.body.current.feelslike +
        " degrees.",
    );
  }
});
/*
    Errors are usually there when we really can't reach the API.
    If the API could be reached but we obtain an error back from 
    the API itself, that's going to go back in the response. Thus,
    It could be useful to try to get errors in the browsers and react
    accordingly to the structure of the error response we get. 
*/
