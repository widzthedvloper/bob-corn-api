const cornProductsTable = require('./cornProducts.models');
const cropTypeTable = require('./croptype-models')
const salesTable = require('./sale-models')
const buyersTable = require('./buyer-models')

cornProductsTable.belongsTo(cropTypeTable, {
  foreignKey: 'crop_type_id',
  as: 'cropType',
});

cropTypeTable.hasMany(cornProductsTable, {
  foreignKey: 'crop_type_id',
});

salesTable.belongsTo(cornProductsTable, {
  foreignKey: 'corn_product_id',
  as: 'cornProduct',
});

cornProductsTable.hasMany(salesTable, {
  foreignKey: 'corn_product_id',
});

salesTable.belongsTo(buyersTable, {
  foreignKey: 'buyer_id',
  as: 'buyer',
});

buyersTable.hasMany(salesTable, {
  foreignKey: 'buyer_id',
});

module.exports = {
    cornProductsTable,
    cropTypeTable,
    salesTable,
    buyersTable
}
