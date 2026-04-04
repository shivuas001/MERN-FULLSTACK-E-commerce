require("dotenv").config()

const PORT = process.env.PORT || 4000;

const express = require("express");
const app = express();

const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");


app.use(express.json());
app.use(cors());

// database connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log("MongoDB Error ❌", err));

// API
app.get("/", (req, res) => {
    res.send("express app is running");
});

// server
app.listen(PORT, () => {
    console.log("port is running at " + PORT);
});