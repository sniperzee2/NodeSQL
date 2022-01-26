module.exports = (sequelize, DataTypes) => {

    const List = sequelize.define("list", {
        listDetails: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return List

}