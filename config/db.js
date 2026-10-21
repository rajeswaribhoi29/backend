const mongoose=require('mongoose')
const dotenv=require('dotenv').config();

async function connection(){
    try{
        await mongoose.connect(process.env.MONGODBURL)
        console.log('db connected')
    }
    catch(error){
        console.error('DB connection failed:', error.message)
        process.exit(1)
    }
}
module.exports=connection