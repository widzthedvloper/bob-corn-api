const cornProductsTable = require('../models/cornProducts.models');

async function getProducts(req, res) {
    const products = await cornProductsTable.findAll();
    res.json(products)
}

async function getProduct(req, res){
    try {
        const productId = parseInt(req?.params?.productId)
        if(productId){
            const product = await cornProductsTable.findByPk(productId)
            if(product){
                res.json(product)
            }else{
                res.status(404).json({error: 'Corn not found'})
            }
        }
    } catch (error) {
        res.status(404).json({error: 'Corn not found'})
    }
}

async function updateProduct(req, res){
    try {
        const id = req?.params?.productId
        const {crop_type_id, harvest_date, quantity} = req?.body

        if(name && email && id){
            const product = await cornProductsTable.findByPk(id)
            if(product){
                await Product.update({
                    id,
                    crop_type_id,
                    harvest_date,
                    quantity
                })
                res.json(product)
            }else{
                res.status(404).json({error: 'Couldn\'t update Corn'})
            }
        }
    } catch (error) {
        res.status(404).json({error: 'Couldn\'t update Corn'})
    }
}

async function createProduct(req, res) {
    try {
        const {name, email} = req?.body

        if(name && email){
            const corn = await cornProductsTable.create({
                crop_type_id,
                harvest_date,
                quantity
            })
            
            res.status(201).json(corn)
        }
    } catch (error) {
        res.status(404).json({error: 'Couldn\'t create Corn'})
    }
}

module.exports = {
    getProducts,
    getProduct,
    updateProduct,
    createProduct,
}