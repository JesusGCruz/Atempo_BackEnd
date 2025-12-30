import { Router } from 'express';
import { BabyItemController } from '../controllers/BabyItemController';
import { SbBabyItemRepository } from '../../infrastructure/database/SbBabyItemRepository';

const router = Router();

// Crear instancias
const productRepository = new SbBabyItemRepository();
const productController = new BabyItemController(productRepository);

// Rutas
router.get('/getAll', productController.getAllProducts);

export default router;