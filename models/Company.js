module.exports = (sequelize, DataTypes) => {

    const Company = sequelize.define("company", {
        companyName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Company

}