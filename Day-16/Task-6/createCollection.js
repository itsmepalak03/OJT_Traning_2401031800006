const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "BillingSystemDB";

async function createCollection() {
  const client = new MongoClient(url);

  try {
    await client.connect();

    console.log("MongoDB Connected");

    const db = client.db(dbName);

    await db.createCollection("customers");

    console.log("Collection 'customers' created successfully");

  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

createCollection();
