import { Request, Response } from 'express';
import { GetAllItems } from '../../application/use-cases/GetAllItems.usecase'
import { IBabyItemRepository } from "../../domain/repositories/IBabyItemRepository";
import { InsertItem } from '../../application/use-cases/InsertItem.usecase';
import { DeleteItemById } from '../../application/use-cases/DeleteItemById.usecase';
import { UpdateItemById } from '../../application/use-cases/UpdateItemById.usecase';

export class BabyItemController {
    private babyItemRepository: IBabyItemRepository;
    constructor(babyItemRepository: IBabyItemRepository) {
        this.babyItemRepository = babyItemRepository;
    }

    insertItem = async (req: Request, res: Response): Promise<void> => {
        try {
            const insertItemUseCase = new InsertItem(this.babyItemRepository);
            const inserted = await insertItemUseCase.execute(
                req.body.name,
                req.body.category,
                req.body.quantity,
                req.body.unit,
                req.body.priority,
                req.body.estimated_price,
                req.body.notes
            );
            res.status(201).json({
                information: inserted,
                status: "OK"
            });
        } catch (error) {
            res.status(500).json({
                error: error instanceof Error ? error.message : 'Error desconocido',
                status: "SERVER_ERROR"
            });
        }
    }

    getAllItems = async (req: Request, res: Response): Promise<void> => {
        try {
            const getAllItemsUseCase = new GetAllItems(this.babyItemRepository);
            const items = await getAllItemsUseCase.execute();
            res.status(200).json({
                data: items,
                status: "OK"
            });
        } catch (error) {
            res.status(500).json({
                error: error instanceof Error ? error.message : 'Error desconocido',
                status: "SERVER_ERROR"
            });
        }
    };

    updateItemById = async (req: Request, res: Response): Promise<void> => {
        try {
            const updateItemByIdUseCase = new UpdateItemById(this.babyItemRepository);
            const data = await updateItemByIdUseCase.execute(
                req.body.name,
                req.body.category,
                req.body.quantity,
                req.body.unit,
                req.body.priority,
                req.body.estimated_price,
                req.body.notes,
                req.body.item_id
            );
            res.json({
                data: data,
                status: "OK"
            });
        } catch (error) {
            res.status(500).json({
                error: error instanceof Error ? error.message : 'Error desconocido',
                status: "SERVER_ERROR"
            });
        }
    }
    deleteItemById = async (req: Request, res: Response): Promise<void> => {
        try {
            const deleteItemByIdUseCase = new DeleteItemById(this.babyItemRepository);
            const deleted = await deleteItemByIdUseCase.execute(+req.params.item_id);
            res.json({
                data: deleted,
                status: "OK"
            });
        } catch (error) {
            res.status(500).json({
                error: error instanceof Error ? error.message : 'Error desconocido',
                status: "SERVER_ERROR"
            });
        }
    }
}
