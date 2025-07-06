const salesTable = require('../models/sale-models');

async function getSales(req, res) {
    const sales = await salesTable.findAll();
    res.json(sales)
}

async function getSale(req, res){
    try {
        const saleId = parseInt(req?.params?.saleId)
        if(saleId){
            const sale = await salesTable.findByPk(saleId)
            if(sale){
                res.json(sale)
            }else{
                res.status(404).json({error: 'Sale not found'})
            }
        }
    } catch (error) {
        res.status(404).json({error: 'Sale not found'})
    }
}

async function updateSale(req, res){
    try {
        const id = req?.params?.saleId
        const {corn_product_id, sale_date, Sale_id, quantity_sold} = req?.body

        if(corn_product_id && sale_date && Sale_id && quantity_sold){
            const sale = await salesTable.findByPk(id)
            if(sale){
                await Sale.update({
                    corn_product_id, 
                    sale_date, 
                    Sale_id, 
                    quantity_sold
                })
                res.json(sale)
            }else{
                res.status(404).json({error: 'Couldn\'t update Sale'})
            }
        }
    } catch (error) {
        res.status(404).json({error: 'Couldn\'t update Sale'})
    }
}

async function createSale(req, res) {
    try {
        const {name, email} = req?.body

        if(name && email){
            const Sale = await salesTable.create({
                name,
                email
            })
            
            res.status(201).json(Sale)
        }
    } catch (error) {
        res.status(404).json({error: 'Couldn\'t update Sale'})
    }
}

module.exports = {
    getSales,
    getSale,
    updateSale,
    createSale,
}