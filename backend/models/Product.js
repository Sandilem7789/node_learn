const mongoose = require("mongoose");

/*This is how our product will look: fields that are going to make up a product*/
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInstock: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

/*Here we are creating the model*/
const Product = mongoose.model('products', productSchema)

module.exports = Product