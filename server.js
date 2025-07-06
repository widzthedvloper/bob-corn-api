const https = require('https');
const fs = require('fs');
const express = require('express');
require('dotenv').config();

const helmet = require('helmet');
const passport = require('passport');

const cors = require('cors');
const {buyersRouter} = require('./src/routes/buyers.routes')
const {cropTypeRouter} = require('./src/routes/croptype-routes')
const {cornProductsRouter} = require('./src/routes/cornProducts.routes')
const {saleRouter} = require('./src/routes/sales.routes')
const {oAuthRouter} = require('./src/login/routes/oAuth.routes');

const app = express();

app.use(helmet());

const PORT = process.env.SERVER_PORT;

app.use(express.json())
app.use(passport.initialize());

app.use(cors({
    origin: 'http://localhost:3000',
}))

app.use('/oauth', oAuthRouter)

app.use('/buyers', buyersRouter)
app.use('/crop-types', cropTypeRouter)
app.use('/corn-products', cornProductsRouter)
app.use('/sales', saleRouter)


const server = https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}, app);

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})