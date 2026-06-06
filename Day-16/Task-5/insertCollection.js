const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "BillingSystemDB";

async function insertOrders() {

    const client = new MongoClient(url);

    try {

        await client.connect();

        console.log("MongoDB Connected");

        const db = client.db(dbName);

        const orders = db.collection("orders");

        const result = await orders.insertMany([
            {
                orderId: 1001,
                customerId: 101,
                orderDate: new Date("2026-06-01"),
                productName: "Laptop",
                quantity: 1,
                amount: 55000,
                status: "Delivered"
            },
            {
                orderId: 1002,
                customerId: 102,
                orderDate: new Date("2026-06-02"),
                productName: "Mobile",
                quantity: 2,
                amount: 40000,
                status: "Pending"
            },
            {
                orderId: 1003,
                customerId: 103,
                orderDate: new Date("2026-06-03"),
                productName: "Headphones",
                quantity: 3,
                amount: 9000,
                status: "Delivered"
            },
            {
                orderId: 1004,
                customerId: 104,
                orderDate: new Date("2026-06-04"),
                productName: "Smart Watch",
                quantity: 2,
                amount: 12000,
                status: "Shipped"
            },
            {
                orderId: 1005,
                customerId: 105,
                orderDate: new Date("2026-06-05"),
                productName: "Keyboard",
                quantity: 5,
                amount: 5000,
                status: "Pending"
            }
        ]);

        console.log(
            `${result.insertedCount} order documents inserted successfully`
        );

    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

insertOrders();
