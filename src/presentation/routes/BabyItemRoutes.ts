import { Router } from 'express';
import { BabyItemController } from '../controllers/BabyItemController';
import { SbBabyItemRepository } from '../../infrastructure/database/SbBabyItemRepository';

const router = Router();

// Crear instancias
const itemRepository = new SbBabyItemRepository();
const itemController = new BabyItemController(itemRepository);

// Rutas de los items
// Obtener todos los items
router.get('/getAll', itemController.getAllItems);
// Insertar un nuevo item
router.post('', itemController.insertItem);
// Eliminar un item
router.delete('/:item_id', itemController.deleteItemById);

export default router;