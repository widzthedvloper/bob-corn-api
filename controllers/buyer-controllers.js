const buyersTable = require('../models/buyer-models');

async function getBuyers(req, res) {
    const buyers = await buyersTable.findAll();
    res.json(buyers)
}

module.exports = {
    getBuyers
}