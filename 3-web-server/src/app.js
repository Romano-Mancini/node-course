const express = require("express");
const path = require("path");
const hbs = require("hbs");
const utils = require("./utils.js");
const app = express();

// Setup handlebars engine and views locations
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../templates/views"));
hbs.registerPartials(path.join(__dirname, "../templates/partials"));

// Setup static directory to serve

/*
  The requests are handled in order: looks at the static directory, then at all the
  other "app.get". Then, at the end, it goes to the 404 handler which basically
  matches with every possible request.
*/
app.use(express.static(path.join(__dirname, "../public")));

app.get("", (req, res) => {
  res.render("index", {
    title: "Home page",
    name: "Romano Mancini",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Romano Mancini",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help page",
    name: "Romano Mancini",
    helpMessage: "In case of necessity, contact me via LinkedIn.",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    res.send({ error: "You must provide an address!" });
  } else {
    utils.geocode(req.query.address, (error, response) => {
      if (error) {
        res.send({ error: error });
      } else {
        utils.forecast(
          response.latitude,
          response.longitude,
          (secondError, secondResponse) => {
            if (secondError) {
              res.send({ error: secondError });
            } else {
              res.send({
                forecast: secondResponse.weather_description,
                location: response.display_name,
                address: req.query.address,
              });
            }
          },
        );
      }
    });
  }
});

app.get("/help/*section", (req, res) => {
  res.render("errorHelp", {
    title: "Help page",
    name: "Romano Mancini",
    errorHelpMessage: "Help article not found.",
  });
});

app.get("*path", (req, res) => {
  res.render("error", {
    title: "Help page",
    name: "Romano Mancini",
    genericErrorMessage: "Page not found.",
  });
});

// just displaying when the application is first run,
// never returned to the user.
app.listen(3000, () => {
  console.log("Server is up on port 3000!");
});
