/*This is where we do all the fetching*/
const Product = require("../models/Product");

//fetching all products
const getAllProducts = async (req, res) => {
  try {
		const products = await Product.find({})
		res.json(products)
  } catch (error) {
		console.error(error)
		res.json(500).json({message: "Server Error"})
	}
};

//fetching just one product by its id
const getProductById = async (req, res) => {
  try {
		const product = await Product.findById(req.params.id)
		res.json(product)
  } catch (error) {
		console.error(error)
		res.json(500).json({message: "Server Error"})
	}
};

//exporting the controllers
module.exports = {
	getAllProducts,
	getProductById
}