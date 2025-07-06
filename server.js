const express = require('express');
const cors = require('cors');
const {buyersRouter} = require('./routes/buyers.routes')

const app = express();

const PORT = 8080;

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:8080',
}))

app.get('/', (req, res)=>{
    res.send('hello!')
})

app.use('/buyers', buyersRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})