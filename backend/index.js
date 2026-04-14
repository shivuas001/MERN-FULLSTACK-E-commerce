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

//Schema for creating products

const Product = mongoose.model("Product",{
    id:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    old_price:{
        type: Number,
        required: true,
    },
    new_price:{
        type: Number,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
    available:{
        type: Boolean,
        default: true,
    },
})

app.post('/addproducts', async (req,res) => {

    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    else{
        id=1;
    }
     const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
     });
     console.log(product);
     await product.save();

     console.log("saved");

     res.json({
        success:1,
        name: req.body.name,
     })
     
})

//creating API for Deleting Product

app.post('/removeproduct', async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id})
    console.log("removed");
    
    res.json({
        success:1,
        name:req.body.name,
    })
})


// server
app.listen(PORT, () => {
    console.log("port is running at " + PORT);
});