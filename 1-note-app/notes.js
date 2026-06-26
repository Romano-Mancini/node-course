const fs = require("fs");
const filename = "notes.json";

const addNotes = function (title, body) {
  currentNotes = loadNotes(filename);

  duplicateNotes = currentNotes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    currentNotes.push({ title: title, body: body });
    saveNotes(currentNotes);
    console.log("Note saved!");
  } else {
    console.log("Note title taken!");
  }
};

const saveNotes = function (notes) {
  fs.writeFileSync(filename, JSON.stringify(notes));
};

const loadNotes = function () {
  try {
    return JSON.parse(fs.readFileSync(filename).toString());
  } catch (e) {
    return [];
  }
};

const removeNotes = function (title) {
  const allNotes = loadNotes(filename);
  const toStore = allNotes.filter(function (note) {
    return !(note.title === title);
  });

  console.log("Title: " + title);
  console.log("Removed " + (allNotes.length - toStore.length) + " note(s).");

  saveNotes(toStore);
};

module.exports = {
  addNotes: addNotes,
  loadNotes: loadNotes,
  removeNotes: removeNotes,
};
