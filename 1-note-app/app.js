const { version } = require('./package.json')

const chalk = require('chalk')
const getNotes = require('./notes.js')
const yargs = require('yargs')

yargs.version = version

yargs.command({
    command: "add",
    describe: "adds a note",
    handler: function () {
        console.log("Adding a note!")
    }
})

yargs.command({
    command: "remove",
    describe: "removes a note",
    handler: function () {
        console.log("Removing a note!")
    }
})

yargs.command({
    command: "list",
    describe: "lists all notes",
    handler: function () {
        console.log("Listing notes!")
    }
})

yargs.command({
    command: "read",
    describe: "reads a note",
    handler: function () {
        console.log("Reading a note!")
    }
})

yargs.parse()