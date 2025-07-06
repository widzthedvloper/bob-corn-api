const express = require('express');
require('dotenv').config();


const cors = require('cors');
const {buyersRouter} = require('./src/routes/buyers.routes')
const {cropTypeRouter} = require('./src/routes/croptype-routes')
const {cornProductsRouter} = require('./src/routes/cornProducts.routes')
const {saleRouter} = require('./src/routes/sales.routes')

const app = express();

const PORT = process.env.SERVER_PORT;

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:3000',
}))

app.get('/', (req, res)=>{
    res.send('hello!')
})

app.use('/buyers', buyersRouter)
app.use('/crop-types', cropTypeRouter)
app.use('/corn-products', cornProductsRouter)
app.use('/sales', saleRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})