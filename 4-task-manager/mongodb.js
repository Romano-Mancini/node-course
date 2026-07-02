// CRUD: Create, Read, Update, Delete

const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "task-manager";

const id = new ObjectId();
console.log(id);
console.log(id.getTimestamp()); // cool to know

async function main() {
  try {
    await client.connect();
    console.log("Connected successfully to server.");

    const db = client.db(dbName);
    const collection = db.collection("tasks");

    // const insertResult = await collection.insertMany([
    //   { description: "Do laundry", completed: true },
    //   { description: "Go to the gym", completed: false },
    //   { description: "Go grocery shopping", completed: false },
    // ]);

    //console.log(insertResult);

    const returnedDocument = await collection.findOne({
      _id: new ObjectId("6a4537d1e738ebbe5374f0f6"),
    });
    if (returnedDocument) {
      console.log(returnedDocument);
    } else {
      console.log("No document found!");
    }

    // returns a cursor, pointer to data returned
    const findDocuments = await collection
      .find({
        completed: false,
      })
      .toArray();

    if (findDocuments) {
      console.log(findDocuments);
    } else {
      console.log("No document found!");
    }

    const updateValue = await collection.updateOne(
      {
        _id: new ObjectId("6a4537d1e738ebbe5374f0f7"),
      },
      {
        $set: {
          completed: false,
        },
      },
    );

    console.log(updateValue);

    const allUpdates = await collection.updateMany(
      { completed: false },
      { $set: { completed: true } },
    );

    console.log(allUpdates);

    const deletedDocuments = await collection.deleteMany({ completed: false });
    console.log(deletedDocuments);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

main();
