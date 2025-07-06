const {Sequelize} = require('sequelize');
const {HOST, DB_NAME, DB_USERNAME, DB_PASSWORD, DB_ENGINE, DB_PORT} = process.env

const db = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: HOST,
    port: DB_PORT,
    dialect: DB_ENGINE,
})

module.exports = db