const express = require('express');

buyersRouter = express.Router()

const {getBuyers} = require('../controllers/buyer-controllers')


buyersRouter.get('/', getBuyers)
buyersRouter.post('/', (req, res)=>{})
buyersRouter.get('/:buyerId', (req, res)=>{})
buyersRouter.post('/:buyerId', (req, res)=>{})

module.exports = {buyersRouter};