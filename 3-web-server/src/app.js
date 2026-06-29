const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

// Setup handlebars engine and views locations
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../templates/views"));
hbs.registerPartials(path.join(__dirname, "../templates/partials"));

// Setup static directory to serve
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

app.get("/about", (req, res) => {
  res.send("<h1>About page</h1>");
});

app.get("/weather", (req, res) => {
  res.send({ forecast: "It's 30 degrees.", location: "Philadelphia." });
});

// just displaying when the application is first run,
// never returned to the user.
app.listen(3000, () => {
  console.log("Server is up on port 3000!");
});
