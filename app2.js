//// a web server using expressjs
/*const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = 3500;

// Step 1: Connect Database
async function connection() {
  await mongoose.connect('mongodb://localhost:27017/silconecommerce');
}

// Step 2: Create Schema
let productschema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

// Step 3: Create Model
let Product = mongoose.model('products', productschema);

// GET all products
app.get('/products', async (req, res) => {
  let data = await Product.find();
  res.json(data);
});

// POST product
app.post('/products', async (req, res) => {
  try {
    const { title, price, image } = req.body;

    let newProduct = new Product({
      title,
      price,
      image
    });

    await newProduct.save();

    res.json({
      msg: 'Product added successfully'
    });
  } catch (error) {
    res.status(500).json({
      msg: error.message
    });
  }
});

// GET product by id
app.get('/products/:id', async (req, res) => {
  try {
    let data = await Product.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({
      msg: error.message
    });
  }
});

// Start Server
app.listen(port, async () => {
  console.log(`Server running on port ${port}`);

  await connection();
  console.log('Database Connected');

  // Dummy Data
  const dummyProducts = [
    {
      title: "iPhone 15",
      price: 79999,
      image: "https://example.com/iphone15.jpg"
    },
    {
      title: "Samsung S24",
      price: 74999,
      image: "https://example.com/s24.jpg"
    },
    {
      title: "OnePlus 12",
      price: 64999,
      image: "https://example.com/oneplus12.jpg"
    },
    {
      title: "MacBook Air M3",
      price: 119999,
      image: "https://example.com/macbook.jpg"
    },
    {
      title: "Dell XPS 13",
      price: 99999,
      image: "https://example.com/dellxps.jpg"
    },
    {
      title: "Sony WH-1000XM5",
      price: 29999,
      image: "https://example.com/sony.jpg"
    },
    {
      title: "iPad Air",
      price: 59999,
      image: "https://example.com/ipadair.jpg"
    },
    {
      title: "Apple Watch Series 9",
      price: 39999,
      image: "https://example.com/watch.jpg"
    },
    {
      title: "Logitech MX Master 3S",
      price: 9999,
      image: "https://example.com/mouse.jpg"
    },
    {
      title: "Samsung 4K Monitor",
      price: 24999,
      image: "https://example.com/monitor.jpg"
    }
  ];

  // Insert only if collection is empty
  const count = await Product.countDocuments();

  if (count === 0) {
    await Product.insertMany(dummyProducts);
    console.log('10 dummy products inserted');
  } else {
    console.log('Products already exist');
  }

  const allProducts = await Product.find();
  console.log(allProducts);
});*/
//a web server using expressjs
/*const express=require('express')
//step1-import the package-mongoose
let mongoose=require('mongoose')
const cors=require('cors')
let products=require('./products')
const app=express();
app.use(cors())
app.use(express.json())
const port=3500;

//step2-->establish a connection


async function connection(){
   await mongoose.connect('mongodb://localhost:27017/silconecommerce')
}

//step3-create a schema

let productschema=new mongoose.Schema({
    title:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true}
})

//s4-model
let productmodel=mongoose.model('products',productschema)

//api which send the  products  as a response
app.get('/products',(req,res)=>{
  res.json(products)
})

//api they will send the details i have to store it

app.post('/products',(req,res)=>{
  const {id,title,image,price}=req.body
  let newproduct={id,title,image,price}
  products.push(newproduct)
  res.json({"msg":"products are added succesfully"})
})

//http://localhost:3000/products/9/user/91
app.get('/products/:n',(req,res)=>{
    let id=req.params.n
  res.json(products[id-1])
})

app.listen(port,async ()=>{
    console.log(`the server is running on ${port}`)
await connection();
let finaldata= await productmodel.findByIdAndUpdate('6a1e8c7f6d0b8bda732715e9',{title:"watch"})
console.log("db is connected")
console.log(finaldata)

})*/
/*const express = require('express');
let connection=require('./config/db')
let products=require('./models/product.model')
const app=express();
const port=3000;
//saller,post=send
app.post('./products',async (req,res)=>
{
  try{
    const{title,price,image}=req.body
    await products.create({title,price,image})
    res.json({"msg":"msg saved"})
  }catch(error){
    res.json({"msg":error.msg})
  }
})
//buyer,get=fetch
app.get('./products',async (req,res)=>
{
  try{
    let allproducts=await products.find()
    res.json(allproducts)
  }catch(error){
    res.json({"msg":error.msg})
  }
})
app.put('./products/:id',async (req,res)=>
{
  try{
    let productid=req.params.id
    await products.findByIdAndUpdate(productid,req.body)
    res.json({"msg":"msg updated"})
  }catch(error){
    res.json({"msg":error.msg})
  }
})
app.delete('./products/:id',async (req,res)=>
{
  try{
    let productid=req.params.id
    await products.findByIdAndDelete(productid)
    res.json({"msg":"msg deleted"})
  }catch(error){
    res.json({"msg":error.msg})
  }
})
app.listen(port,()=>
{
  console.log(`the server is running on ${port}`)
  connection();
})*/
