module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');
    const UserRoles = sequelize.define('user_roles', 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // unique: true,
        },
        roleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // unique: true,
        },
    });
    return UserRoles;
}
