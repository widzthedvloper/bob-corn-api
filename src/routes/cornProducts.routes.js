const express = require('express');

cornProductsRouter = express.Router()

const {getProducts, getProduct, updateProduct,} = require('../controllers/cornProduct-controllers')


cornProductsRouter.get('/', getProducts)
cornProductsRouter.get('/:productId', getProduct)
cornProductsRouter.post('/:productId', updateProduct)

module.exports = {cornProductsRouter};