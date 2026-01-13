export class BabyItem {
    private name: string;
    private category: string;
    private quantity: number;
    private unit: string;
    private priority: number;
    private estimated_price: number;
    private is_purchased: boolean;
    private notes: string;
    private readonly create_at: string;
    private item_id?: number;
    private purchased_date?: string;
    constructor(
        name: string,
        category: string,
        quantity: number,
        unit: string,
        priority: number,
        estimated_price: number,
        is_purchased: boolean,
        notes: string,
        create_at: string,
        item_id?: number,
        purchased_date?: string
    ) {
        this.name = name;
        this.category = category;
        this.quantity = quantity;
        this.unit = unit;
        this.priority = priority;
        this.estimated_price = estimated_price;
        this.is_purchased = is_purchased;
        this.notes = notes;
        this.create_at = create_at;
        this.item_id = item_id;
        this.purchased_date = purchased_date;
    }

    getItemId(): number | undefined {
        return this.item_id;
    }
    getName(): string {
        return this.name;
    }
    getCategory(): string {
        return this.category;
    }
    getQuantity(): number {
        return this.quantity;
    }
    getUnit(): string {
        return this.unit;
    }
    getPriority(): number {
        return this.priority;
    }
    getEstimatedPrice(): number {
        return this.estimated_price;
    }
    IsPurchased(): boolean {
        return this.is_purchased;
    }
    getPurchasedDate(): string | undefined {
        return this.purchased_date;
    }
    getNotes(): string {
        return this.notes;
    }
    getCreateAt(): string {
        return this.create_at;
    }
}