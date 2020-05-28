const ProductDAO = require("../datamodel/productdao");

module.exports = class ProductService {
    constructor(db) {
        this.productdao = new ProductDAO(db)
    }
    isValid(product) {
        product.productName = product.productName.trim();
        if (product.productName === "") return false;
        if ((product.quantity === null) || (product.quantity < 1)) return false;
        if ((product.list === null) || (product.list < 1)) return false;
        return true
    }
};