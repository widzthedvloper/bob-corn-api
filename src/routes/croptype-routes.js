const express = require('express');

cropTypeRouter = express.Router()

const {getCropTypes, getCropType, updateCropType} = require('../controllers/croptype-controllers')


cropTypeRouter.get('/', getCropTypes)
cropTypeRouter.get('/:cropTypeId', getCropType)
cropTypeRouter.post('/:croTypeId', updateCropType)

module.exports = {cropTypeRouter};