import { Request, Response } from 'express';
import { GetAllItems } from '../../application/use-cases/GetAllItems.usecase'
import { IBabyItemRepository } from "../../domain/repositories/IBabyItemRepository";

export class BabyItemController {
    private babyItemRepository: IBabyItemRepository;
    constructor(babyItemRepository: IBabyItemRepository) {
        this.babyItemRepository = babyItemRepository;
     }

    getAllProducts = async (req: Request, res: Response): Promise<void> => {
        try {
            const getAllProductsUseCase = new GetAllItems(this.babyItemRepository);
            const products = await getAllProductsUseCase.execute();
            res.status(200).json({
                data: products,
                status: "OK"
            });
        } catch (error) {
            res.status(500).json({
                error: error instanceof Error ? error.message : 'Error desconocido',
                status: "SERVER_ERROR"
            });
        }
    };
}
