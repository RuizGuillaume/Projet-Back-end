const BaseDAO = require('./basedao')

module.exports = class ProductDAO extends BaseDAO{
    constructor(db) {
        super(db)
    }
    insert(product) {
        return this.db.promise().query("INSERT INTO product(productName,quantity) VALUES ($1,$2,$3,$4)",
            [product.productName, product.quantity, product.checked, product.list])
    }
    getAll(list) {
        return new Promise((resolve, reject) =>
            this.db.promise().query("SELECT * FROM product ORDER BY productName WHERE list=$1", [list])
                .then(([rows, fields]) => resolve(rows))
                .catch(e => reject(e)))
    }
    update(product) {
        return this.db.promise().query("UPDATE product SET productName=$2, quantity=$3, checked=$4 WHERE id=$1",
            [product.id, product.productName, product.quantity, product.checked])
    }
}