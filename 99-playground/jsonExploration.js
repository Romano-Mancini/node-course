const fs = require('fs')

const person = {
    name: "Romano",
    surname: "Mancini",
    age: 22
}

fs.writeFileSync("person.json", JSON.stringify(person))

const returnedJSON = fs.readFileSync("person.json").toString()
const newPersonObject = JSON.parse(returnedJSON)

console.log(newPersonObject.name)