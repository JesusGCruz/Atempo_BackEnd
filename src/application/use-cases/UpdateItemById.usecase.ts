import { BabyItem } from "../../domain/entities/BabyItem";
import { IBabyItemRepository } from "../../domain/repositories/IBabyItemRepository";

export class UpdateItemById{
    private iBabyItemRepository: IBabyItemRepository;
    constructor(iBabyItemRepository: IBabyItemRepository){
        this.iBabyItemRepository = iBabyItemRepository;
    }
    
    async execute(
        name: string,
        category: string,
        quantity: number,
        unit: string,
        priority: number,
        estimated_price: number,
        notes: string,
        item_id: number
    ){
        const item = new BabyItem(
            name,
            category.toUpperCase(),
            quantity,
            unit,
            priority,
            estimated_price,
            false, // Datos de relleno
            notes,
            new Date().toString(), // No son enviados a la db
            item_id
        );
        return await this.iBabyItemRepository.updateItemById(item);
    }
}