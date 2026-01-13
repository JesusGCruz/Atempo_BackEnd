import { Router } from 'express';
import { BabyItemController } from '../controllers/BabyItemController';
import { SbBabyItemRepository } from '../../infrastructure/database/SbBabyItemRepository';

const router = Router();

// Crear instancias
const itemRepository = new SbBabyItemRepository();
const itemController = new BabyItemController(itemRepository);

// Rutas de los items
router.get('/getAll', itemController.getAllItems);

router.post('', itemController.insertItem);

export default router;