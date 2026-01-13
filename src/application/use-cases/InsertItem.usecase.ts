import { BabyItem } from "../../domain/entities/BabyItem";
import { IBabyItemRepository } from "../../domain/repositories/IBabyItemRepository";

export class InsertItem{
    private itemRepository: IBabyItemRepository;
    constructor(itemRepository: IBabyItemRepository){
        this.itemRepository = itemRepository;
    }

    async execute(
        name: string,
        category: string,
        quantity: number,
        unit: string,
        priority: number,
        estimated_price: number,
        notes: string
    ){
        let newBabyItem = new BabyItem(
            name,
            category,
            quantity,
            unit,
            priority,
            estimated_price,
            false,
            notes,
            new Date().toString()
        );
        return await this.itemRepository.saveItem(newBabyItem);
    }
    
}