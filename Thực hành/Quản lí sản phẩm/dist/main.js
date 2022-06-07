"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./Product");
const productManager_1 = require("./productManager");
let productManager = new productManager_1.ProductManager();
let laptop = new Product_1.Product('Dell', 20000000);
let TV = new Product_1.Product('SamSung', 40000000);
productManager.addProduct(laptop, TV);
console.log(productManager.getListProduct());
//# sourceMappingURL=main.js.map