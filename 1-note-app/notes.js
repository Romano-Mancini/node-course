const fs = require("fs");
const chalk = require("chalk");
const filename = "notes.json";

const addNotes = (title, body) => {
  const currentNotes = loadNotes();

  const duplicateNotes = currentNotes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
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
  const allNotes = loadNotes(filename);
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

module.exports = {
  addNotes: addNotes,
  loadNotes: loadNotes,
  removeNotes: removeNotes,
};
