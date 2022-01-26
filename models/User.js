module.exports = (sequelize, DataType) => {

    const User = sequelize.define("user", {
        name: {
            type: DataType.TEXT,
            allowNull: false
        },
        email: {
            type: DataType.TEXT,
            allowNull: false
        },
        companyId: {
            type: DataType.TEXT,
            allowNull: false
        }
    })

    return User

}