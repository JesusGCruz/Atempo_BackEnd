export class BabyItem {
    constructor(
        private readonly item_id: number,
        private name: string,
        private category: string,
        private priority: number,
        private estimated_price: number,
        private is_purchased: boolean,
        private purchased_date: string,
        private notes: string,
        private readonly create_at: string
    ) {
        
    }

    getItemId(): number{
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
    getPurchasedDate(): string{
        return this.purchased_date;
    }
    getNotes(): string{
        return this.notes;
    }
    getCreateAt(): string{
        return this.create_at;
    }
}