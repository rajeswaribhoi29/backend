let users=require('../models/usermodel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const mail=require('../utils/gmail')
require('dotenv').config();

const sign=(user)=>jwt.sign({id:user._id,email:user.email},process.env.SECRETKEY,{expiresIn:'1hr'})

exports.register=async (req,res)=>{
  try {
    const {name,email,password}=req.body
    if(!name || !email || !password) return res.status(400).json({msg:"name, email and password are required"})
    if(await users.findOne({email:email.toLowerCase().trim()})) return res.status(409).json({msg:"user already exists"})

    const user=await users.create({name,email,password:await bcrypt.hash(password,10)})
    res.status(201).json({msg:"registration successful",token:sign(user)})
    mail(email,name).catch(()=>{})
  } catch (error) {
    res.status(500).json({msg:error.message})
  }
}

exports.login=async (req,res)=>{
  try {
    const {email,password}=req.body
    if(!email || !password) return res.status(400).json({msg:"email and password are required"})

    const user=await users.findOne({email:email.toLowerCase().trim()})
    if(!user || !await bcrypt.compare(password,user.password))
      return res.status(401).json({msg:"invalid email or password"})
    res.json({msg:"login successful",token:sign(user)})
  } catch (error) {
    res.status(500).json({msg:error.message})
  }
}

exports.me=async (req,res)=>{
  try {
    const user=await users.findById(req.user.id).select('-password')
    if(!user) return res.status(404).json({msg:"user not found"})
    res.json(user)
  } catch (error) {
    res.status(500).json({msg:error.message})
  }
}
