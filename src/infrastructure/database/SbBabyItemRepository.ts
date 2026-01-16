import { BabyItem } from "../../domain/entities/BabyItem";
import { IBabyItemRepository } from "../../domain/repositories/IBabyItemRepository";
import { supabase } from '../config/supabase';

export class SbBabyItemRepository implements IBabyItemRepository {
    async saveItem(item: BabyItem): Promise<boolean> {
        const { data, error } = await supabase.rpc('insert_item', {
            p_name: item.getName(),
            p_category_text: item.getCategory(),
            p_priority_val: item.getPriority(),
            p_estimated_price: item.getEstimatedPrice(),
            p_notes: item.getNotes(),
            p_quantity: item.getQuantity(),
            p_unit_text: item.getUnit()
        });
        if (error) throw new Error(`Error al insertar: ${error.message}.`);

        return data;
    }

    async getAllItems(): Promise<BabyItem[]> {
        const { data, error } = await supabase
            .from('v_baby_item')
            .select('*');

        if (error) throw new Error(`Error al obtener: ${error.message}.`);

        return data.map(row => new BabyItem(
            row.name,
            row.category,
            row.quantity,
            row.unit,
            row.priority,
            row.estimated_price,
            row.is_purchased,
            row.notes,
            row.created_at,
            row.item_id,
            row.purchase_date
        ));
    }

    async updateItemById(baby_item: BabyItem): Promise<boolean> {
        // Recordatorio: No convinar convenciones
        //  todo de la db es snake_case, no camelCase
        const { data, error } = await supabase.rpc('update_item', {
            p_name: baby_item.getName(),
            p_category_text: baby_item.getCategory(),
            p_quantity: baby_item.getQuantity(),
            p_unit_text: baby_item.getUnit(),
            p_priority_val: baby_item.getPriority(),
            p_estimated_price: baby_item.getEstimatedPrice(),
            p_notes: baby_item.getNotes(),
            p_item_id: baby_item.getItemId()
        });
        if (error) throw new Error(`Error al insertar: ${error.message}.`);
        return data;
    }

    async deleteItemById(item_id: number): Promise<boolean> {
        const { data, error } = await supabase
            .from('baby_items')
            .delete()
            .eq('item_id', item_id)
            .select();
        if (error) throw new Error(`Error al obtener: ${error.message}.`);
        if (data.length > 0) return true;
        return false;
    }

    findByCategory(category: string): Promise<BabyItem[] | null> {
        throw new Error("Method not implemented.");
    }

}