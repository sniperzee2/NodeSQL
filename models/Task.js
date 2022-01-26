module.exports = (sequelize, DataTypes) => {

    const Task = sequelize.define("task", {
        task: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pending: {
            type: DataTypes.BOOLEAN
        },
        listId: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Task

}