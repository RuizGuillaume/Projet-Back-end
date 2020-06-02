const listProductDAO = require("../datamodel/listProductdao");

module.exports = class ProductService {
    constructor(db) {
        this.listProductdao = new listProductDAO(db)
    }
    isValid(listProduct) {
        listProduct.shop = product.shop.trim();
        if (listProduct.shop === "") return false;
        if (listProduct.date === null) return false;
        if (listProduct.archived === null) return false;
        return true
    }
};