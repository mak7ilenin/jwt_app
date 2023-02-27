module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');
    const User = sequelize.define('users', 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: true,
        }
    });
    return User;
}