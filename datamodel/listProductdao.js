const BaseDAO = require('./basedao');

module.exports = class ListProductDAO extends BaseDAO{
    constructor(db) {
        super(db, "list")
    }
    getAll(user)
    {
        return new Promise((resolve , reject) =>
            this.db.query("SELECT * FROM liste where manage=$1" , [user.id])
                .then(res => resolve(res.rows))
                .catch(e => reject(e))
        )
    }
};