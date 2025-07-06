const buyersTable = require('../models/buyer-models');

async function getBuyers(req, res) {
    const buyers = await buyersTable.findAll();
    res.json(buyers)
}

async function getBuyer(req, res){
    try {
        const buyerId = parseInt(req?.params?.buyerId)
        if(buyerId){
            const buyer = await buyersTable.findByPk(buyerId)
            if(buyer){
                res.json(buyer)
            }else{
                res.status(404).json({error: 'Buyer not found'})
            }
        }
    } catch (error) {
        res.status(404).json({error: 'Buyer not found'})
    }
}

async function updateBuyer(req, res){
    try {
        const id = req?.params?.buyerId
        const {name, email} = req?.body

        if(name && email && id){
            const buyer = await buyersTable.findByPk(id)
            if(buyer){
                await buyer.update({
                    name,
                    email
                })
                res.json(buyer)
            }else{
                res.status(404).json({error: 'Couldn\'t update Buyer'})
            }
        }
    } catch (error) {
        res.status(404).json({error: 'Couldn\'t update Buyer'})
    }
}

async function createBuyer(req, res) {
    try {
        const {name, email} = req?.body

        if(name && email){
            const buyer = await buyersTable.create({
                name,
                email
            })
            
            res.status(201).json(buyer)
        }
    } catch (error) {
        res.status(404).json({error: 'Couldn\'t update Buyer'})
    }
}

module.exports = {
    getBuyers,
    getBuyer,
    updateBuyer,
    createBuyer,
}