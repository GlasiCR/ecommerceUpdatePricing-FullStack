import mongoose from "mongoose"

const ProductsSchema = new mongoose.Schema({
    code: {type: Number, required: true},
    name: {type: String, required: true},
    new_price: {type: Number, required: true},
})

const Products = mongoose.model("Products", ProductsSchema)

export { Products }