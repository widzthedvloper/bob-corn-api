const express = require('express');

buyersRouter = express.Router()

const {getBuyers, getBuyer, updateBuyer} = require('../controllers/buyer-controllers')


buyersRouter.get('/', getBuyers)
buyersRouter.get('/:buyerId', getBuyer)
buyersRouter.post('/:buyerId', updateBuyer)

module.exports = {buyersRouter};