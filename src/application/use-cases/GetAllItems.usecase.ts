import { BabyItem } from "../../domain/entities/BabyItem";
import { IBabyItemRepository } from "../../domain/repositories/IBabyItemRepository";

export class GetAllItems {
    private itemRepository: IBabyItemRepository;
    constructor(itemRepository: IBabyItemRepository) {
        this.itemRepository = itemRepository;
     }

    async execute(): Promise<BabyItem[]> {
        const items = await this.itemRepository.getAllItems();
        // Ordenado por prioridad
        return items.sort((a, b) => a.getPriority() - b.getPriority());
    }
}