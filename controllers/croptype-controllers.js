const cropTypeTable = require('../models/croptype-models');

async function getCropTypes(req, res) {
    const crops = await cropTypeTable.findAll();
    res.json(crops)
}

async function getCropType(req, res){
    try {
        const cropTypeId = parseInt(req?.params?.cropTypeId)
        if(cropTypeId){
            const cropType = await cropTypeTable.findByPk(cropTypeId)
            res.json(cropType)
        }
    } catch (error) {
        res.status(404).json({error: 'Crop Type not found'})
    }
}

async function updateCropType(req, res){
    try {
        const id = req?.params?.cropTypeId
        const {name, email} = req?.body

        if(name && email && id){
            const crop = await cropTypeTable.findByPk(id)
            await crop.update({
                name,
                email
            })
            res.json(crop)
        }
    } catch (error) {
        res.status(404).json({error: 'Couldn\'t update Crop Type'})
    }
}

async function createCropType(req, res) {
    try {
        const {name, email} = req?.body

        if(name && email){
            const crop = await cropTypeTable.create({
                name,
                email
            })
            
            res.status(201).json(crop)
        }
    } catch (error) {
        res.status(404).json({error: 'Couldn\'t update Crop Type'})
    }
}

module.exports = {
    getCropTypes,
    getCropType,
    updateCropType,
    createCropType,
}