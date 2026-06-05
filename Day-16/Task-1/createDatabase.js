const { MongoClient } = require("mongodb");

// MongoDB Connection URL
const url = "mongodb://127.0.0.1:27017";

// Database Name
const dbName = "BillingSystemDB";

async function createDatabase() {
  const client = new MongoClient(url);

  try {
    await client.connect();

    console.log("MongoDB Connected Successfully");

    const db = client.db(dbName);

    // Create first collection so database gets created
    await db.createCollection("customers");

    console.log(`Database '${dbName}' Created Successfully`);
    console.log("Collection 'customers' Created Successfully");

  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close();
    console.log("Connection Closed");
  }
}

createDatabase();
