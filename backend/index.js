require("dotenv").config()

const PORT = process.env.PORT || 4000;

const express = require("express");
const app = express();

const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const path = require("path");


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

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    },
})

const upload = multer({storage:storage})

//creating upload endpoint for images

app.use('/images', express.static('upload/images'))

app.post("/upload",upload.single("product"),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${PORT}/images/${req.file.filename}`
    })
})

// server
app.listen(PORT, () => {
    console.log("port is running at " + PORT);
});