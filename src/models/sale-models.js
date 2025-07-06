const db = require('./db_connection');
const {DataTypes} = require('sequelize');

const salesTable = db.define('Sales', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    corn_product_id:{type: DataTypes.INTEGER},
    sale_date: {type: DataTypes.DATE},
    buyer_id: {type: DataTypes.INTEGER},
    quantity_sold: {type: DataTypes.INTEGER}
},{
    tableName: 'sales',
    timestamps: false
})


module.exports = salesTable;