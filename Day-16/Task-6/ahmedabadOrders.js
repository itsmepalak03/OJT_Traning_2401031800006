const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "BillingSystemDB";

async function ahmedabadOrders() {

    const client = new MongoClient(url);

    try {

        await client.connect();

        const db = client.db(dbName);

        const result = await db.collection("orders")
            .aggregate([
                {
                    $lookup: {
                        from: "customers",
                        localField: "customerId",
                        foreignField: "customerId",
                        as: "customerInfo"
                    }
                },
                {
                    $unwind: "$customerInfo"
                },
                {
                    $match: {
                        "customerInfo.city": "Ahmedabad"
                    }
                },
                {
                    $project: {
                        _id: 0,
                        orderId: 1,
                        productName: 1,
                        quantity: 1,
                        amount: 1,
                        status: 1,
                        customerName: "$customerInfo.customerName",
                        city: "$customerInfo.city",
                        mobile: "$customerInfo.mobile",
                        email: "$customerInfo.email"
                    }
                }
            ])
            .toArray();

        console.log("\nAhmedabad Customer Orders\n");

        console.table(
            result.map(data => ({
                OrderID: data.orderId,
                Customer: data.customerName,
                City: data.city,
                Mobile: data.mobile,
                Product: data.productName,
                Quantity: data.quantity,
                Amount: data.amount,
                Status: data.status
            }))
        );

    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

ahmedabadOrders();
