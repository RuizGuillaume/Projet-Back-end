const BaseDAO = require('./basedao');

module.exports = class ListProductDAO extends BaseDAO{
    constructor(db) {
        super(db, "listProduct")
    }
    insert(listProduct) {
        return this.db.query("INSERT INTO listProduct(shop, date, archived) VALUES ($1,$2,$3)",
            [listProduct.shop, listProduct.date, listProduct.archived])
    }
    getAll() {
        return new Promise((resolve, reject) =>
            this.db.query("SELECT * FROM listProduct ORDER BY shop")
                .then(res => resolve(res.rows))
                .catch(e => reject(e)))
    }
    update(listProduct) {
        return this.db.query("UPDATE listProduct SET shop=$2, date=$3, archived=$4 WHERE id=$1",
            [listProduct.id, listProduct.shop, listProduct.date, listProduct.archived])
    }
};