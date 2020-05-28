const BaseDAO = require('./basedao');

module.exports = class ListProductDAO extends BaseDAO{
    constructor(db) {
        super(db, "list")
    }
    getAll()
    {
        return new Promise((resolve, reject) =>
            this.db.promise().query("SELECT * FROM list ORDER BY date,shop")
                .then(([rows, fields]) => resolve(rows))
                .catch(e => reject(e))
        )
    }
};