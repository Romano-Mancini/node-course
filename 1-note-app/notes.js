const fs = require("fs");
const chalk = require("chalk");
const filename = "notes.json";

const addNotes = (title, body) => {
  const currentNotes = loadNotes();

  // const duplicateNotes = currentNotes.filter((note) => note.title === title);
  const duplicateNote = currentNotes.find((note) => note.title === title);

  if (!duplicateNote) {
    currentNotes.push({ title: title, body: body });
    saveNotes(currentNotes);
    console.log(chalk.green.inverse("Note saved!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

const saveNotes = (notes) => fs.writeFileSync(filename, JSON.stringify(notes));

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync(filename).toString());
  } catch (e) {
    return [];
  }
};

const removeNotes = (title) => {
  const allNotes = loadNotes();
  const toStore = allNotes.filter((note) => !(note.title === title));

  const amountRemoved = allNotes.length - toStore.length;
  console.log("Title: " + title);

  if (amountRemoved > 0) {
    console.log(chalk.green.inverse("Note removed!"));
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }

  saveNotes(toStore);
};

const listNotes = () => {
  console.log(chalk.blue.inverse("Your notes"));
  const allNotes = loadNotes();

  allNotes.forEach((note) => console.log("- " + note.title));
};

const readNote = (title) => {
  const currentNotes = loadNotes();
  const note = currentNotes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.bold(note.title));
    console.log(note.body);
  } else {
    console.log(
      chalk.red.inverse("ERROR: no note found with specified title."),
    );
  }
};

module.exports = {
  addNotes: addNotes,
  loadNotes: loadNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNote: readNote,
};
