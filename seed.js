require('dotenv').config()
const mongoose = require('mongoose')
const Product = require('./models/product.model')
const data = require('./products')

async function seed() {
  await mongoose.connect(process.env.MONGODBURL)
  await Product.deleteMany()
  await Product.insertMany(data.map(({ id, ...p }) => p))
  console.log(`seeded ${data.length} products`)
  await mongoose.disconnect()
}

seed()
