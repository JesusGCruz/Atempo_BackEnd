import { BabyItem } from "../entities/BabyItem";

export interface IBabyItemRepository{
    //MVP1 = CRUD inicial
    saveItem(item: BabyItem): Promise<boolean>;
    getAllItems(): Promise<BabyItem[]>;
    editItem(): Promise<boolean>;
    deleteItem(): Promise<boolean>;

    //Encontrar todos los productos que pertenezcan a una categoria
    findByCategory(category: string): Promise<BabyItem[] | null>;
}