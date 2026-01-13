import { IBabyItemRepository } from "../../domain/repositories/IBabyItemRepository";

export class DeleteItemById {
    private itemRepository: IBabyItemRepository;
    constructor(itemRepository: IBabyItemRepository) {
        this.itemRepository = itemRepository;
    }

    async execute(item_id: number) {
        if (item_id)
            return await this.itemRepository.deleteItemById(item_id);
        else {
            console.log("NO execute delete item by id");
            return false;
        }
    }

}