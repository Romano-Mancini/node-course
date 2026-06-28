const utils = require("./utils.js");

const location = process.argv[2];
if (!location) {
  console.log("No location was provided!");
  return;
}

utils.geocode(location, (error, response) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Retrieved data for " + response.display_name + ".");
    utils.forecast(
      response.latitude,
      response.longitude,
      (forecastError, forecastData) => {
        if (forecastError) {
          console.log(forecastError);
        } else {
          console.log(
            forecastData.weather_description +
              ". There are " +
              forecastData.temperature +
              " degrees, which feels like " +
              forecastData.feelsLike +
              " degrees.",
          );
        }
      },
    );
  }
});
