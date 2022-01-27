const dbConfig = require('../config/db.js');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: dbConfig.pool
    }
)

sequelize.authenticate()
.then(() => {
    console.log('DB connected')
})
.catch(err => {
    console.log('Error')
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.company = require('./Company.js')(sequelize, DataTypes)
db.user = require('./User.js')(sequelize,DataTypes)
db.list = require('./List.js')(sequelize,DataTypes)
db.task = require('./Task.js')(sequelize,DataTypes)
db.union = require('./Union.js')(sequelize,DataTypes)

db.sequelize.sync({force: false})
.then(() => {
    console.log('re-sync done!')
})

db.company.hasMany(db.user,{
    foreignKey: 'companyId',
    as: 'user'
})

db.user.belongsTo(db.company,{
    foreignKey: 'companyId',
    as: 'company'
})

db.user.belongsToMany(db.list,{
    through: db.union,
    as: 'list'
})

db.list.belongsToMany(db.user,{
    through: db.union,
    as: 'user'
})

db.list.hasMany(db.task,{
    foreignKey: 'listId',
    as: 'task'
})

db.task.belongsTo(db.list,{
    foreignKey: 'listId',
    as: 'list'
})


module.exports = db