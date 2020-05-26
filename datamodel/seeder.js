const Product = require('./product');

module.exports = (productService) => {
    return new Promise(async (resolve, reject) => {
            try {
                await productService.dao.db.query("CREATE TABLE product (id SERIAL PRIMARY KEY, productName TEXT, quantity INTEGER, checked BOOL)")
                // autres CREATE TABLE...
            } catch (e) {
                if (e.code === "42P07") { // TABLE ALREADY EXISTS https://www.postgresql.org/docs/8.2/errcodes-appendix.html
                    resolve()
                } else {
                    reject(e)
                }
                return
            }
            for (let i = 0; i < 5; i++) {
                await productService.dao.insert(new Product("ProductName" + i, Math.floor(Math.random() * 10), false, Math.floor(Math.random() * 3)))
            }
            resolve()
        }
    )
};