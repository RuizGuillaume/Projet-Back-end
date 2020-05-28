const Product = require('./listProduct');

module.exports = (productService) => {
    return new Promise(async (resolve, reject) => {
         try {
             await productService.dao.db.promise().query("CREATE TABLE IF NOT EXISTS list (idList INT PRIMARY KEY NOT NULL AUTO_INCREMENT, shop VARCHAR(70) NOT NULL, date DATE, archived INT)")
         } catch (e) {
             reject(e)
         }
         resolve()
     })
};