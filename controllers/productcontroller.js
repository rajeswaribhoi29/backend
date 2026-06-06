let products=require('../models/product.model')
exports.createproduct=async (req,res)=>{
 try {
  const {title,price,image}=req.body
 await products.create({title,price,image})
  res.json({"msg":"product saved"})
 } catch (error) {
  res.json({"msg":error.message})
 }
}

exports.getproduct=async (req,res)=>{
 try {
 let maxlimit=req.query.limit
 let shipment=req.query.location
  let allproducts=await products.find().limit(maxlimit)
  res.json(allproducts)
 } catch (error) {
  res.status(200).json({"msg":error.message})
 }
}

exports.updateproduct=async (req,res)=>{
 try {
  let productid=req.params.id
await  products.findByIdAndUpdate(productid,req.body)
 res.status(200).json({"msg":"product updated"})
 } catch (error) {
  res.status(500).json({"msg":error.message})
 }
}

exports.deleteproduct=async (req,res)=>{
 try {
  let productid=req.params.id
await  products.findByIdAndDelete(productid)
 res.json({"msg":"product deleted"})
 } catch (error) {
  res.json({"msg":error.message})
 }
}