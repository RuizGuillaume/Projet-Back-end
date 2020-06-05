const Product = require('./productList')

module.exports = (ProductListService) => {
    return new Promise(async (resolve, reject) => {
         try {
             //await productService.dao.db.promise().query("CREATE TABLE IF NOT EXISTS list (idList INT PRIMARY KEY NOT NULL AUTO_INCREMENT, shop VARCHAR(70) NOT NULL, date DATE, archived INT)")
             await ProductListService.productListdao.db.query("CREATE TABLE list2 (idList INT PRIMARY KEY NOT NULL AUTO_INCREMENT, date DATE, archived INT)")
         } catch (e) {
             reject(e)
         }
         resolve()
     })
}