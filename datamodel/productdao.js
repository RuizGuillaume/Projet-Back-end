const BaseDAO = require('./basedao')

module.exports = class ProductDAO extends BaseDAO{
    constructor(db) {
        super(db)
    }
    insert(product) {
        return this.db.promise().query("INSERT INTO product(productName,quantity) VALUES ($1,$2,$3,$4)",
            [product.productName, product.quantity, product.checked, product.list])
    }
    getAll()  //Tous les produits
    {
        return new Promise((resolve , reject) =>
            this.db.promise().query("SELECT * FROM product")
                .then(([rows, fields]) => resolve(rows))
                .catch(e => reject(e))
        )
    }
    getById(id) // Un produit
    {
        return new Promise((resolve , reject) =>
            this.db.promise().query("SELECT * FROM product WHERE id = ?", [id])
                .then(([rows, fields]) => resolve(rows))
                .catch(e => reject(e))
        )
    }
    getByListId(listId) // Tous les produits d'une liste
    {
        return new Promise((resolve , reject) =>
            this.db.promise().query("SELECT * FROM product WHERE idList = ?", [listId])
                .then(([rows, fields]) => resolve(rows))
                .catch(e => reject(e))
        )
    }
    update(product) {
        return this.db.promise().query("UPDATE product SET label=$1, quantity=$2, checked=$3 WHERE id=$4",
            [product.label, product.quantity, product.checked, product.id])
    }
}