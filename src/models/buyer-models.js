const db = require('./db_connection');
const {DataTypes} = require('sequelize');

const buyersTable = db.define('Buyers', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email:{type: DataTypes.TEXT},
    name: { type: DataTypes.TEXT},
    role: {
        type: DataTypes.TEXT,
        defaultValue: 'user',
    },
},{
    tableName: 'buyers',
    timestamps: false
})


module.exports = buyersTable;