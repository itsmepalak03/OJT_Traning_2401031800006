const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "BillingSystemDB";

async function billingReport() {

    const client = new MongoClient(url);

    try {

        await client.connect();

        const db = client.db(dbName);

        const report = await db.collection("orders")
            .aggregate([
                {
                    $group: {
                        _id: null,
                        totalOrders: { $sum: 1 },
                        totalRevenue: { $sum: "$amount" },
                        averageOrderValue: { $avg: "$amount" },
                        highestBill: { $max: "$amount" },
                        lowestBill: { $min: "$amount" }
                    }
                }
            ])
            .toArray();

        console.log("\n===== BILLING REPORT =====\n");

        console.table(report);

    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

billingReport();
