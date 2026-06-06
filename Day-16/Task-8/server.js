const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();

app.use(cors());
app.use(express.json());

const url = "mongodb://127.0.0.1:27017";
const dbName = "BillingSystemDB";

let db;

MongoClient.connect(url)
    .then(client => {
        db = client.db(dbName);
        console.log("MongoDB Connected");
    })
    .catch(err => console.error(err));


// GET ALL ORDERS

app.get("/api/orders", async (req, res) => {

    try {

        const orders = await db
            .collection("orders")
            .find({})
            .toArray();

        res.json(orders);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});


// ADD NEW ORDER

app.post("/api/orders", async (req, res) => {

    try {

        const newOrder = {
            orderId: req.body.orderId,
            customerId: req.body.customerId,
            orderDate: new Date(),
            productName: req.body.productName,
            quantity: req.body.quantity,
            amount: req.body.amount,
            status: req.body.status
        };

        const result = await db
            .collection("orders")
            .insertOne(newOrder);

        res.status(201).json({
            success: true,
            message: "Order Added Successfully",
            insertedId: result.insertedId
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});


// GET ORDER BY ID

app.get("/api/orders/:id", async (req, res) => {

    try {

        const orderId = parseInt(req.params.id);

        const order = await db
            .collection("orders")
            .findOne({ orderId });

        if (!order) {
            return res.status(404).json({
                message: "Order Not Found"
            });
        }

        res.json(order);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});


app.listen(5000, () => {
    console.log("Server Running On Port 5000");
});
