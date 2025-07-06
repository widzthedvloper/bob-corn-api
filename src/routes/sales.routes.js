const express = require('express');

saleRouter = express.Router()

const {getSales, getSale, updateSale} = require('../controllers/sale-controllers')


saleRouter.get('/', getSales)
saleRouter.get('/:saleId', getSale)
saleRouter.post('/:saleId', updateSale)

module.exports = {saleRouter};