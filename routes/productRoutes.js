import express from 'express';
import { deleteProduct, getAllProducts, getProductById, registerProduct, updateProduct } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.post('/register', registerProduct)
productRouter.get('/', getAllProducts);
productRouter.get('/:id', getProductById);
productRouter.post('/update-product/:id', updateProduct);
productRouter.post('/delete-product/:id', deleteProduct);

export default productRouter;