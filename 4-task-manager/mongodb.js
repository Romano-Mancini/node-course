// CRUD: Create, Read, Update, Delete

const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "task-manager";

async function main() {
  try {
    await client.connect();
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const collection = db.collection("tasks");

    const insertResult = await collection.insertMany([
      { description: "Do laundry", completed: true },
      { description: "Go to the gym", completed: false },
      { description: "Go grocery shopping", completed: false },
    ]);

    const newInsertedResults = await console.log(insertResult);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

main();
