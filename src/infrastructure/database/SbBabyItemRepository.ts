import { BabyItem } from "../../domain/entities/BabyItem";
import { IBabyItemRepository } from "../../domain/repositories/IBabyItemRepository";
import { supabase } from '../config/supabase';

export class SbBabyItemRepository implements IBabyItemRepository {
    saveItem(item: BabyItem): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async getAllItems(): Promise<BabyItem[]> {
        const { data, error } = await supabase
            .from('v_baby_item')
            .select('*');

        if (error) throw new Error(`Error al obtener ${error.message}.`);

        return data.map(row => new BabyItem(
            row.name,
            row.category,
            row.quantity,
            row.unit,
            row.priority,
            row.estimated_price,
            row.is_purchased,
            row.notes,
            row.create_at,
            row.item_id,
            row.purchased_date
        ));
    }
    editItem(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    deleteItem(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    findByCategory(category: string): Promise<BabyItem[] | null> {
        throw new Error("Method not implemented.");
    }

}