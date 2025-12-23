import { BabyItem } from "../../domain/entities/BabyItem";
import { IBabyItemRepository } from "../../domain/repositories/IBabyItemRepository";

export class SaveItem{
    constructor(private itemRepository: IBabyItemRepository){}

    async execute(
        name: string,
        category: string,
        priority: number,
        estimated_price: number,
        notes: string
    ){
        let newBabyItem = new BabyItem(
            name,
            category,
            priority,
            estimated_price,
            false,
            notes,
            new Date().toString()
        );
        return await this.itemRepository.saveItem(newBabyItem);
    }
    
}