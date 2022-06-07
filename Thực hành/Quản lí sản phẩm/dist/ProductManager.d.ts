import { Product } from "./Product";
export declare class ProductManager {
    private products;
    constructor();
    addProduct(...product: Product[]): void;
    getListProduct(): Product[];
}
