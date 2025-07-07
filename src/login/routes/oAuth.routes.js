const express = require('express');
const {Strategy} = require('passport-google-oauth20');
const passport = require('passport');

const AUTH_GOOGLE_OPTION = {
    callbackURL: '/oauth/google/callback',
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
}

function authCallback(accessToken, refreshToken, profile, done){
    done(null, profile);
}

passport.use(new Strategy(AUTH_GOOGLE_OPTION, authCallback))


oAuthRouter = express.Router()

// const {getSales, getSale, updateSale} = require('../controllers/sale-controllers')


oAuthRouter.get('/google', passport.authenticate('google', {
    scope: ['email']
}));

oAuthRouter.get('/google/callback', passport.authenticate('google', {
    failureRedirect: 'failure',
    successRedirect: 'success',
    session: true,
}), (req, res)=>{console.log('From google...')});

oAuthRouter.get('/google/failure', (req, res)=> res.redirect('http://localhost:5173/login'));
oAuthRouter.get('/google/success', (req, res)=> res.redirect('http://localhost:5173/'));
oAuthRouter.get('/logout', (req, res)=>{
    req.logout((err)=>{
        if(err){
            return next(err)
        }
        res.status(200).json({message: 'Logged out!'})
    });
})
oAuthRouter.get('/is-loggedin', (req, res) => {
    const isLoggedIn = req.isAuthenticated() && req.user;

    res.status(200).json({'is_loggedin': isLoggedIn})
})

module.exports = {oAuthRouter};