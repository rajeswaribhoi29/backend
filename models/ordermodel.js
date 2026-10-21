const mongoose=require('mongoose')

let orderschema=new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:'users',required:true},
    items:[{
        product:{type:mongoose.Schema.Types.ObjectId,ref:'products'},
        title:String,
        price:Number,
        image:String,
        qty:{type:Number,min:1}
    }],
    total:{type:Number,required:true},
    address:{type:String,required:true},
    status:{type:String,enum:["placed","shipped","delivered"],default:"placed"}
},{timestamps:true})

module.exports=mongoose.model('orders',orderschema)
