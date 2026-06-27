require("dotenv").config();
const request = require("postman-request");
const apiKey = process.env.API_KEY;

const URL =
  "http://api.weatherstack.com/current?access_key=" +
  apiKey +
  "&query=New York" +
  "&units=m" +
  "&language=en";

// request({ url: URL, json: true }, (error, response) => {
//   console.log(
//     response.body.current.weather_descriptions[0] +
//       ".It is currently " +
//       response.body.current.temperature +
//       " degrees out. However, it feels like " +
//       response.body.current.feelslike +
//       " degrees.",
//   );
// });

const city = "Los Angeles";
const geoURL =
  "https://nominatim.openstreetmap.org/search?q=" + city + "&format=json";

request(
  { url: geoURL, json: true, headers: { "User-Agent": "my-weather-app" } },
  (error, response) => {
    const lat = response.body[0].lat;
    const lon = response.body[0].lon;
    const actualCity = response.body[0].display_name;
    console.log("Retrieved data for " + actualCity + "\n" + lat, lon);
  },
);
