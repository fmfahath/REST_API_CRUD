import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
}, { timestamps: true });

const productModel = mongoose.model('Product', productSchema)

export default productModel;