module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "jwt_app",
    dialect: "mysql",
    pool: {
        max: 20,
        min: 0,
        idle: 10000,
        acquire: 30000
    }
}