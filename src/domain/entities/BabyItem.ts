export class BabyItem {
    constructor(
        private name: string,
        private category: string,
        private priority: number,
        private estimated_price: number,
        private is_purchased: boolean,
        private notes: string,
        private readonly create_at: string,
        private item_id?: number,
        private purchased_date?: string
    ) {}

    getItemId(): number | undefined{
        return this.item_id;
    }
    getName(): string{
        return this.name;
    }
    getCategory(): string{
        return this.category;
    }
    getPriority(): number{
        return this.priority;
    }
    getEstimatedPrice(): number{
        return this.estimated_price;
    }
    IsPurchased(): boolean{
        return this.is_purchased;
    }
    getPurchasedDate(): string | undefined{
        return this.purchased_date;
    }
    getNotes(): string{
        return this.notes;
    }
    getCreateAt(): string{
        return this.create_at;
    }
}