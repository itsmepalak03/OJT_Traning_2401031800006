const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "BillingSystemDB";

async function fetchRecentOrders() {

    const client = new MongoClient(url);

    try {

        await client.connect();

        const db = client.db(dbName);

        const orders = db.collection("orders");

        // Current Date
        const today = new Date();

        // Date Before 5 Days
        const fiveDaysAgo = new Date();
        fiveDaysAgo.setDate(today.getDate() - 5);

        const recentOrders = await orders.find({
            orderDate: {
                $gte: fiveDaysAgo,
                $lte: today
            }
        }).toArray();

        console.log("\nOrders Given Within Last 5 Days\n");

        console.table(
            recentOrders.map(order => ({
                OrderID: order.orderId,
                CustomerID: order.customerId,
                Product: order.productName,
                Quantity: order.quantity,
                Amount: order.amount,
                Status: order.status,
                OrderDate: order.orderDate.toLocaleDateString()
            }))
        );

    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

fetchRecentOrders();
