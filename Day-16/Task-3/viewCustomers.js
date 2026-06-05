const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "BillingSystemDB";

async function viewCustomers() {

  const client = new MongoClient(url);

  try {

    await client.connect();

    const db = client.db(dbName);

    const customers = await db
      .collection("customers")
      .find({})
      .toArray();

    console.table(customers);

  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

viewCustomers();
