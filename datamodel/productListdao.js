const BaseDAO = require('./basedao')

module.exports = class ProductListDAO extends BaseDAO {
    constructor(db) {
        super(db)
    }
    getAll()
    {
        return new Promise((resolve , reject) =>
            this.db.query("SELECT * FROM list")// , [user.id])
                .then(res => resolve(res.rows))
                .catch(e => reject(e))
        )
    }
}