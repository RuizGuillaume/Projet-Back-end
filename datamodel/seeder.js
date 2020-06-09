const Product = require('./product')
const ProductList = require('./productList')

module.exports = (productService, ProductListService) => {
    return new Promise(async (resolve, reject) => {
         try {
             //await productService.dao.db.promise().query("CREATE TABLE IF NOT EXISTS list (idList INT PRIMARY KEY NOT NULL AUTO_INCREMENT, shop VARCHAR(70) NOT NULL, date DATE, archived INT)")
             await ProductListService.productListdao.db.promise().query("CREATE TABLE IF NOT EXISTS list2 (idList INT PRIMARY KEY NOT NULL AUTO_INCREMENT, date DATE, archived INT)")
         } catch (e) {
             reject(e)
         }
         resolve()
     })
}