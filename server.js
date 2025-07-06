const https = require('https');
const fs = require('fs');
const express = require('express');
require('dotenv').config();

const helmet = require('helmet');
const passport = require('passport');
const cookieSession = require('cookie-session')

const cors = require('cors');
const {buyersRouter} = require('./src/routes/buyers.routes')
const {cropTypeRouter} = require('./src/routes/croptype-routes')
const {cornProductsRouter} = require('./src/routes/cornProducts.routes')
const {saleRouter} = require('./src/routes/sales.routes')
const {oAuthRouter} = require('./src/login/routes/oAuth.routes');

const app = express();

app.use(helmet());

passport.serializeUser((user, done)=>{
    done(null, user);
})

passport.deserializeUser((obj, done)=>{
    done(null, obj);
})

app.use(cookieSession({
    name: '_bob_corn_session',
    maxAge: 24 * 60 * 60 * 60,
    keys: [process.env.COOKIE_KEY_1, process.env.COOKIE_KEY_2],
}))

app.use((req, res, next)=>{
    if(req.session && !req.session.regenerate){
        req.session.regenerate = (cb)=>{
            cb();
        }
    }
    if(req.session && !req.session.save){
        req.session.save = (cb)=>{
            cb();
        }
    }
    next();
})

const PORT = process.env.SERVER_PORT;

app.use(express.json())
app.use(passport.initialize());
app.use(passport.session());

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