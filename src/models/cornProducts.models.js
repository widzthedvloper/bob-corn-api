const db = require('./db_connection');
const {DataTypes} = require('sequelize');

const cornProductsTable = db.define('CornProducts', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    crop_type_id: { type: DataTypes.INTEGER},
    harvest_date:{type: DataTypes.DATE},
    quantity: {type: DataTypes.INTEGER}
},{
    tableName: 'cornproducts',
    timestamps: false
})


module.exports = cornProductsTable;