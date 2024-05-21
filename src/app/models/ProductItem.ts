export class ProductItem {
    id: number; 
    name: string; 
    description: string;
    brand: string;
    gender: string;
    category: string;
    size: number[];
    color?: string[];
    price: number;
    discountPrice?: number;
    is_in_inventory: boolean;
    items_left: number;
    imageURL: string;
    slug: string;

    constructor() {
        this.id = 0;
        this.name = "";
        this.description = "";
        this.brand = "";
        this.gender = "";
        this.category = "";
        this.size = [];
        this.color = undefined;
        this.price = 0;
        this.discountPrice = 0;
        this.is_in_inventory = false;
        this.items_left = 0;
        this.imageURL = "";
        this.slug = "";
    }
}