const Product = require('./product')
const ProductList = require('./productList')

module.exports = (ProductService, ProductListService) => {
    return new Promise(async (resolve, reject) => {
         try {
             // await ProductListService.productListdao.db.promise().query("CREATE TABLE IF NOT EXISTS productList (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, shop TEXT, date DATE, archived BOOLEAN)")
             // await ProductService.productdao.db.promise().query("CREATE TABLE IF NOT EXISTS product (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, label TEXT, quantity INT, checked BOOLEAN, idList INT, FOREIGN KEY (idList) REFERENCES productList(id))")
             //
             // await ProductListService.productListdao.db.promise().query("INSERT INTO productList (shop, date, archived) VALUES ('Auchan', '2020/06/5', '0')")
             // await ProductListService.productListdao.db.promise().query("INSERT INTO product (label, quantity, checked, idList) VALUES ('Tomates', '3', '0', '1')")
         } catch (e) {
             reject(e)
         }
         resolve()
     })
}