const BaseDAO = require('./basedao')

module.exports = class ProductListDAO extends BaseDAO {
    constructor(db) {
        super(db)
    }
    getAll() //Toutes les listes
    {
        return new Promise((resolve , reject) =>
            this.db.promise().query("SELECT * FROM productlist")
                .then(([rows, fields]) => resolve(rows))
                .catch(e => reject(e))
        )
    }
    getById(id) // Une liste en particulier
    {
        return new Promise((resolve , reject) =>
            this.db.promise().query("SELECT * FROM productlist WHERE id = ?", [id])
                .then(([rows, fields]) => resolve(rows))
                .catch(e => reject(e))
        )
    }
}