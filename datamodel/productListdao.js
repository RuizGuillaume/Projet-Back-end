const BaseDAO = require('./basedao')

module.exports = class ProductListDAO extends BaseDAO {
    constructor(db) {
        super(db)
    }
    getAll()
    {
        return new Promise((resolve , reject) =>
            this.db.promise().query("SELECT * FROM ProductList")// , [user.id])
                .then(([rows, fields]) => resolve(rows))
                .catch(e => reject(e))
        )
    }
    getById(id)
    {
        return new Promise((resolve , reject) =>
            this.db.promise().query("SELECT * FROM list WHERE id = ?", [id])
                .then(([rows, fields]) => resolve(rows))
                .catch(e => reject(e))
        )
    }
}