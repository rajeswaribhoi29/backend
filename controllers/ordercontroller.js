const {isValidObjectId}=require('mongoose')
const orders=require('../models/ordermodel')
const products=require('../models/product.model')

exports.createorder=async (req,res)=>{
  try {
    const {items,address}=req.body
    if(!address || !Array.isArray(items) || items.length===0)
      return res.status(400).json({msg:"address and items are required"})

    const found=await products.find({_id:{$in:items.map(i=>i._id).filter(isValidObjectId)}})
    const lines=items.flatMap(i=>{
      const p=found.find(f=>f.id===i._id)
      const qty=Math.floor(Number(i.qty))
      return p && qty>0 ? [{product:p._id,title:p.title,price:p.price,image:p.image,qty}] : []
    })
    if(lines.length===0) return res.status(400).json({msg:"no valid items"})

    const total=Math.round(lines.reduce((sum,l)=>sum+l.price*l.qty,0)*100)/100
    const order=await orders.create({user:req.user.id,items:lines,total,address})
    res.status(201).json(order)
  } catch (error) {
    res.status(500).json({msg:error.message})
  }
}

exports.myorders=async (req,res)=>{
  try {
    res.json(await orders.find({user:req.user.id}).sort({createdAt:-1}))
  } catch (error) {
    res.status(500).json({msg:error.message})
  }
}
