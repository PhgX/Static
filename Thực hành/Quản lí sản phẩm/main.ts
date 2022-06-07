import { Product } from "./Product";
import { ProductManager } from "./productManager";

let productManager = new ProductManager();

let laptop = new Product ('Dell', 20000000);
let TV = new Product ('SamSung', 40000000);

productManager.addProduct(laptop, TV);
console.log(productManager.getListProduct());

