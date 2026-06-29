const utils = require("./utils.js");

const location = process.argv[2];
if (!location) {
  console.log("No location was provided!");
  return;
}

utils.geocode(location, (error, { latitude, longitude, display_name } = {}) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Retrieved data for " + display_name + ".");
    utils.forecast(
      latitude,
      longitude,
      (forecastError, { weather_description, temperature, feelsLike }) => {
        if (forecastError) {
          console.log(forecastError);
        } else {
          console.log(
            weather_description +
              ". There are " +
              temperature +
              " degrees, which feels like " +
              feelsLike +
              " degrees.",
          );
        }
      },
    );
  }
});
