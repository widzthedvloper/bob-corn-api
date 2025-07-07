const https = require('https');
const fs = require('fs');
const express = require('express');
require('dotenv').config();

const {initializeLimiter} = require('./src/utils/rate-limit')

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

function checkLoggedIn(req, res, next){
    const isLoggedIn = req.isAuthenticated() && req.user;

    if(!isLoggedIn){
        return res.status(404).json({error: 'Please log in and try again!'})
    }else{
        next()
    }

}

passport.serializeUser((user, done)=>{
    const {sub, email} = user?._json
    done(null, {sub, email});
})

passport.deserializeUser((sub, done)=>{
    done(null, sub);
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

app.use(checkLoggedIn)
app.use('/buyers', buyersRouter)
app.use('/crop-types', cropTypeRouter)
app.use('/corn-products', cornProductsRouter)
app.use('/sales', saleRouter)

initializeLimiter().then((rateLimiter) => {
    app.use('/buy', rateLimiter, (req, res) => {
    res.status(200).json({ message: 'Thanks for buying' });
  })
})

const server = https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}, app);

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})