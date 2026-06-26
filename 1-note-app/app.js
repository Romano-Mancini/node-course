const { version } = require("./package.json");

const noteUtils = require("./notes.js");
const yargs = require("yargs");

yargs.version = version;

yargs.command({
  command: "add",
  describe: "adds a note",
  builder: {
    title: {
      describe: "title of the note",
      type: "string",
      demandOption: true,
    },
    body: {
      describe: "body of the note",
      type: "string",
      demandOption: true,
    },
  },
  handler: function (argv) {
    noteUtils.addNotes(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "removes a note",
  handler: function () {
    console.log("Removing a note!");
  },
});

yargs.command({
  command: "list",
  describe: "lists all notes",
  handler: function () {
    console.log("Listing notes!");
  },
});

yargs.command({
  command: "read",
  describe: "reads a note",
  handler: function () {
    console.log("Reading a note!");
  },
});

yargs.parse();
