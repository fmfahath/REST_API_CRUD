import productModel from "../models/productModel.js";
import mongoose from "mongoose";


//register new product--------------------
export const registerProduct = async (req, res) => {
    try {
        const { name, price, quantity } = req.body;

        //validate input
        if (!name || !price || !quantity) {
            return res.status(400).json({ message: "All fields are required" });
        }

        //register product
        const newProduct = await productModel.create({
            name,
            price,
            quantity
        });

        res.status(201).json({
            sucess: true,
            message: "Product registered successfully",
            product: newProduct
        });
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: "Product registration failed",
            error: error.message
        })
    }
}


//get all products--------------------
export const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find();
        res.status(200).json({
            success: true,
            products: products
        });
    } catch (error) {
        res.status(500).json({
            success: true,
            message: error.message
        })
    }
}


//get single product by id--------------------
export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;

        //validate ID
        if (!id || !mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: "Invalid product ID" });
        }

        const product = await productModel.findById(id);

        //validate product
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        res.status(200).json({
            success: true,
            product: product
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

//update product-----------------------------------------
export const updateProduct = async (req, res) => {
    try {
        const { name, price, quantity } = req.body;
        const { id } = req.params

        //validate  input
        if (!name || !price || !quantity) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        //validate ID
        if (!id || !mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: "Invalid product ID" });
        }

        const updatedProduct = await productModel.findByIdAndUpdate(id, {
            name, price, quantity
        }, { new: true });

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            product: updatedProduct
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

//delete product-----------------------------------------
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        //validate ID
        if (!id || !mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: "Invalid product ID" });
        }

        const deletedProduct = await productModel.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}