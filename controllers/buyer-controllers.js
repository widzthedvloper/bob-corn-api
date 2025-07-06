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
            res.json(buyer)
        }
    } catch (error) {
        res.status(404).json({error: 'Buyer not found'})
    }
}

module.exports = {
    getBuyers,
    getBuyer
}