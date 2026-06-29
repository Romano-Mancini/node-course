const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.get("/help", (req, res) => {
  res.send({ name: "Romano", surname: "Mancini", age: 22 });
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
