import authRoutes from './auth.routes.js';
import cartRoutes from './cart.routes.js';
import productRoutes from './products.routes.js';
import { Router } from 'express';


const router = Router();

router.use("/auth", authRoutes);
router.use("/cart", cartRoutes);
router.use("/products",  productRoutes);

export default router;