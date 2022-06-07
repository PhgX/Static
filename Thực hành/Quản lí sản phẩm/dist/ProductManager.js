"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManager = void 0;
class ProductManager {
    constructor() {
        this.products = [];
    }
    addProduct(...product) {
        this.products.push(...product);
    }
    getListProduct() {
        return this.products;
    }
}
exports.ProductManager = ProductManager;
//# sourceMappingURL=ProductManager.js.map