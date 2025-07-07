const cropTypeTable = require('../models/croptype-models');

async function getCropTypes(req, res) {
    const crops = await cropTypeTable.findAll();
    res.json(crops)
}

async function getCropType(req, res){
    try {
        const cropTypeId = parseInt(req?.params?.cropTypeId)
        if(cropTypeId){
            console.log('runnn')
            const cropType = await cropTypeTable.findByPk(cropTypeId)
            if(cropType){
                res.json(cropType)
            } else{
                res.status(404).json({error: 'Crop Type not found'})
            }
        }
    } catch (error) {
        res.status(404).json({error: 'Crop Type not found'})
    }
}

async function updateCropType(req, res){
    try {
        const id = req?.params?.cropTypeId
        const {name, description} = req?.body

        if(name && email && id){
            const crop = await cropTypeTable.findByPk(id)
            if(crop){
                await crop.update({
                    name,
                    description
                })
                res.json(crop)
            }else{
                res.status(404).json({error: 'Couldn\'t update Crop Type'})
            }
        }
    } catch (error) {
        res.status(404).json({error: 'Couldn\'t update Crop Type'})
    }
}

async function createCropType(req, res) {
    try {
        const {name, description} = req?.body

        if(name && email){
            const crop = await cropTypeTable.create({
                name,
                description
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