const express = require('express');

buyersRouter = express.Router()

const {getBuyers, getBuyer} = require('../controllers/buyer-controllers')


buyersRouter.get('/', getBuyers)
buyersRouter.post('/', (req, res)=>{})
buyersRouter.get('/:buyerId', getBuyer)
buyersRouter.post('/:buyerId', (req, res)=>{})

module.exports = {buyersRouter};