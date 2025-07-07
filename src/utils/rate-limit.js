const rateLimit = require('express-rate-limit');
const {default: RedisStore} = require('rate-limit-redis');
const {createClient} = require('redis');

const redisClient = createClient({
    url: process.env.REDIS_URL
})
async function initializeLimiter(){
    if (!redisClient.isOpen){
        await redisClient.connect();
    }

    const rateLimiter = rateLimit({
        store: new RedisStore({
            sendCommand: (...args) => redisClient.sendCommand(args),
        }),
        windowMs: 1 * 60 * 1000,
        max: 1,
        keyGenerator: (req) => {
            if(req?.user?.email){
                return req.user.email;
            }
        },
        handler: (req, res) => {
            res.status(429).json({
                error: 'Too Many Requests'
            })
        }
    })

    return rateLimiter
    
}

module.exports = {initializeLimiter}