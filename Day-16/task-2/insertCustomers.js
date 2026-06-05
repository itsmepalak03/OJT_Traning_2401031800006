const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "BillingSystemDB";

async function insertCustomers() {

  const client = new MongoClient(url);

  try {

    await client.connect();

    const db = client.db(dbName);

    const customers = db.collection("customers");

    const result = await customers.insertMany([
      {
        customerId: 101,
        customerName: "Rahul Patel",
        city: "Ahmedabad",
        mobile: "9876543210",
        email: "rahul@gmail.com"
      },
      {
        customerId: 102,
        customerName: "Priya Shah",
        city: "Surat",
        mobile: "9876543211",
        email: "priya@gmail.com"
      },
      {
        customerId: 103,
        customerName: "Amit Joshi",
        city: "Ahmedabad",
        mobile: "9876543212",
        email: "amit@gmail.com"
      },
      {
        customerId: 104,
        customerName: "Neha Mehta",
        city: "Vadodara",
        mobile: "9876543213",
        email: "neha@gmail.com"
      },
      {
        customerId: 105,
        customerName: "Karan Desai",
        city: "Rajkot",
        mobile: "9876543214",
        email: "karan@gmail.com"
      }
    ]);

    console.log(
      `${result.insertedCount} customer documents inserted successfully`
    );

  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

insertCustomers();
