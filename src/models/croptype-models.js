const db = require('./db_connection');
const {DataTypes} = require('sequelize');

const cropTypeTable = db.define('CropTypes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: { type: DataTypes.TEXT},
    description:{type: DataTypes.TEXT},
},{
    tableName: 'croptypes',
    timestamps: false
})


module.exports = cropTypeTable;