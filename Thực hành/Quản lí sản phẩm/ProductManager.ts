import { Product } from "./Product";

export class ProductManager {
    private products : Product[] = []
    constructor(){}
    addProduct(...product: Product[]): void{
        this.products.push(...product)
    }

    getListProduct(){
        return this.products;
    }
}

