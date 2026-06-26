const fs = require('fs')
const getNotes = require('./notes.js')
const validator = require('validator')

fs.appendFileSync('notes.txt', 'Title.\n')
fs.appendFileSync('notes.txt', 'Description.\n')
fs.appendFileSync('notes.txt', 'Paragraph.')

console.log(getNotes())
console.log(validator.isEmail("john@example.com"))