const productListDAO = require("../datamodel/productListdao")

module.exports = class ProductListService {
    constructor(db) {
        this.productListdao = new productListDAO(db)
    }
    isValid(productList) {
        if (productList.shop === null) return false
        if (productList.date === null) return false
        if (productList.archived === null) return false
        return true
    }
}