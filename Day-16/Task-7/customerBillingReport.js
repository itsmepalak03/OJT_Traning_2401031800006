const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "BillingSystemDB";

async function customerBillingReport() {

    const client = new MongoClient(url);

    try {

        await client.connect();

        const db = client.db(dbName);

        const report = await db.collection("orders")
            .aggregate([
                {
                    $lookup: {
                        from: "customers",
                        localField: "customerId",
                        foreignField: "customerId",
                        as: "customer"
                    }
                },
                {
                    $unwind: "$customer"
                },
                {
                    $group: {
                        _id: "$customer.customerName",
                        totalOrders: { $sum: 1 },
                        totalAmount: { $sum: "$amount" }
                    }
                }
            ])
            .toArray();

        console.table(report);

    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

customerBillingReport();
