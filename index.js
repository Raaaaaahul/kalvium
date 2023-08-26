const connectToMongo = require('./db');
const express = require('express')
var cors = require("cors")

connectToMongo();

const app = express()
const port = 5000

app.use(cors());
app.use(express.json())

app.use('/home',require('./routes/homeRoute'))
app.use('/numbers/',require('./routes/routes'))
app.use('/history',require('./routes/hisRoute'));

app.listen(port, () => {
    console.log(`backend of numbers listening on port ${port}`)
  })    