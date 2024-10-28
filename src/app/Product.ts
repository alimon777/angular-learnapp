export class Product {
    id: number;
    brand: string;
    description: string;
    quantity:number;
    price:number;

    constructor(id:number, brand:string, description:string, quantity:number, price:number){
        this.id=id;
        this.brand=brand;
        this.description=description;
        this.quantity=quantity;
        this.price=price;
    }
}