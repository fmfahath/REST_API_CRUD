import express from 'express';
import { deleteProduct, getAllProducts, getProductById, registerProduct, updateProduct } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.post('/register', registerProduct)
productRouter.get('/', getAllProducts);
productRouter.get('/:id', getProductById);
productRouter.put('/update-product/:id', updateProduct);
productRouter.delete('/delete-product/:id', deleteProduct);

export default productRouter;