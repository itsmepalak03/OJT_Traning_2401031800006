const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "BillingSystemDB";

async function viewOrders() {

    const client = new MongoClient(url);

    try {

        await client.connect();

        const db = client.db(dbName);

        const orders = await db
            .collection("orders")
            .find({})
            .toArray();

        console.table(orders);

    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

viewOrders();
