require("dotenv").config();
const request = require("postman-request");
const apiKey = process.env.API_KEY;

const URL =
  "http://api.weatherstack.com/current?access_key=" +
  apiKey +
  "&query=New York";

request({ url: URL }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current.temperature);
});
