const mongoose=require('mongoose')
let productschema=new mongoose.Schema({
    title:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    description: { type: String },
  category:    { type: String },
  rating: {
    rate:  { type: Number },
    count: { type: Number }
  }
})
let products=mongoose.model('products',productschema)

module.exports=products;

// const mongoose=require('mongoose');
// const userSchema=new mongoose.Schema({
//    name: { type: String, required: true ,unique: true},
//    email: { type: String, required: true, unique: true },
//    password: { type: String, required: true },
//    role: {type: String, enums: ['buyer', 'seller'],required: true }
// },{ timestamps: true });
// let users=mongoose.model('User', userSchema)

// module.exports=users;