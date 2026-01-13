import { BabyItem } from "../../domain/entities/BabyItem";
import { IBabyItemRepository } from "../../domain/repositories/IBabyItemRepository";
import { supabase } from '../config/supabase';

// Agregar las politicas de escritura a las tablas (CREATE POLICY)

export class SbBabyItemRepository implements IBabyItemRepository {
    async saveItem(item: BabyItem): Promise<boolean> {
        const { data, error } = await supabase.rpc('insert_item', {
            p_name: item.getName(),
            p_category_text:item.getCategory(),
            p_priority_val:item.getPriority(),
            p_estimated_price:item.getEstimatedPrice(),
            p_notes:item.getNotes(),
            p_quantity:item.getQuantity(),
            p_unit_text:item.getUnit()
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