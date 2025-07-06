const {Sequelize} = require('sequelize');

const db = new Sequelize('postgres','postgres', 'mysecretpassword', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
})

module.exports = db