const request = require("postman-request");

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
    (error, response) => {
      if (error) {
        callback("Couldn't reach Nominatim API.", undefined);
      } else if (!response.body) {
        callback("Unable to find location.", undefined);
      } else {
        callback(undefined, {
          latitude: response.body[0].lat,
          longitude: response.body[0].lon,
          display_name: response.body[0].display_name,
        });
      }
    },
  );
};

module.exports = geocode;
