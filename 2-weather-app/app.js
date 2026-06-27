const utils = require("./utils.js");

utils.geocode("Alcatraz", (error, response) => {
  error ? console.log(error) : console.log(response);
});

utils.forecast(-75.7088, 44.1545, (error, data) => {
  error ? console.log(error) : console.log(data);
});
