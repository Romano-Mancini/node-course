const { version } = require("./package.json");

const noteUtils = require("./notes.js");
const yargs = require("yargs");

yargs.version(version);

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
  handler(argv) {
    noteUtils.addNotes(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "removes a note",
  builder: {
    title: {
      describe: "title of the note to remove",
      type: "string",
      demandOption: true,
    },
  },
  handler(argv) {
    noteUtils.removeNotes(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "lists all notes",
  handler() {
    noteUtils.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "reads a note",
  builder: {
    title: {
      describe: "title of the note to read",
      type: "string",
      demandOption: true,
    },
  },
  handler(argv) {
    noteUtils.readNote(argv.title);
  },
});

yargs.parse();
