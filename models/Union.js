const db = require('./index.js')

const User = db.user
const List = db.list
const Task = db.task


module.exports = (sequelize, DataTypes) => {

    const Union = sequelize.define("union", {
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            }
        },
        listId: {
            type: DataTypes.INTEGER,
            references: {
                model: List,
                key: 'id'
            }
        }
    })

    return Union

}