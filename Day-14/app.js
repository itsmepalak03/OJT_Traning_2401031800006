const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

// Configure Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Serve Static Files
app.use(express.static("public"));

// Upload Route
app.post("/upload", upload.single("myFile"), (req, res) => {
    res.send("File Uploaded Successfully!");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});