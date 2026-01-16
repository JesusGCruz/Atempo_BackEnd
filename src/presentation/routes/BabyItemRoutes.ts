import { Router } from 'express';
import { BabyItemController } from '../controllers/BabyItemController';
import { SbBabyItemRepository } from '../../infrastructure/database/SbBabyItemRepository';

const router = Router();

// Crear instancias para guardar datos
// Se puede reemplazar (SbBaby...) por otra interfaz y funcionara igual
const itemRepository = new SbBabyItemRepository(); 
//El controlador solo invoca los metodos de la interfaz, no importa si es en db o local
const itemController = new BabyItemController(itemRepository);

// Rutas de los items
// Insertar un nuevo item C
router.post('', itemController.insertItem);
// Obtener todos los items R
router.get('', itemController.getAllItems);
// Actualizar un item U
router.put('', itemController.updateItemById);
// Eliminar un item D
router.delete('/:item_id', itemController.deleteItemById);

export default router;