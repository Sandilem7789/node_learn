require("dotenv").config()
const productsData = require("./data/products")
const connectDB = require("./config/db")
const Product = require("./models/Product")

connectDB()

const importData = async () => {
  try {
		//deleting everything on the datadase
		await Product.deleteMany({})

		//inserting many objects at the same time
		await Product.insertMany(productsData)

		console.log("Data Import Success")

		process.exit()

  } catch (error) {
		console.error("Error with Data Import")
		process.exit(1)
	}
}

importData()