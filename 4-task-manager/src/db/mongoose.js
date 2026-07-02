const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");

    const Task = mongoose.model("Task", {
      description: String,
      completed: Boolean,
    });
    const obj = new Task({ description: "Do laundry", completed: false });
    const result = await obj.save();

    console.log(result);
  } catch (error) {
    console.log("Error: " + error);
  } finally {
    await mongoose.connection.close();
  }
}

main();
