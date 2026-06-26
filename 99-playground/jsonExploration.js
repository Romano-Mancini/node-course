const fs = require("fs");

const person = {
  name: "Romano",
  surname: "Mancini",
  age: 22,
};

fs.writeFileSync("person.json", JSON.stringify(person));

const returnedJSON = fs.readFileSync("person.json").toString();
const newPersonObject = JSON.parse(returnedJSON);

console.log(newPersonObject.name);

const planetJSON = fs.readFileSync("planet.json").toString();
const planetObject = JSON.parse(planetJSON);
planetObject.name = "Romano";
planetObject.age = 22;

const planetJSON2 = JSON.stringify(planetObject);
fs.writeFileSync("planet.json", planetJSON2);

const people = fs.readFileSync("people.json");
console.log(JSON.parse(people.toString()));
