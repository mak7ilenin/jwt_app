module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');
    const Role = sequelize.define('roles', 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });
    return Role;
}
