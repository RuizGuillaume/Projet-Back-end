const BaseDAO = require('./basedao');

module.exports = class ProductDAO extends BaseDAO{
    constructor(db) {
        super(db, "product")
    }
    insert(product) {
        return this.db.query("INSERT INTO product(productName,quantity) VALUES ($1,$2,$3,$4)",
            [product.productName, product.quantity, product.checked, product.list])
    }
    getAll(list) {
        return new Promise((resolve, reject) =>
            this.db.query("SELECT * FROM product ORDER BY productName WHERE list=$1", [list])
                .then(res => resolve(res.rows))
                .catch(e => reject(e)))
    }
    update(product) {
        return this.db.query("UPDATE product SET productName=$2, quantity=$3, checked=$4 WHERE id=$1",
            [product.id, product.productName, product.quantity, product.checked])
    }
};