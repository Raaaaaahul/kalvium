const mongoose = require('mongoose')
const {Schema} = mongoose

const operations = new Schema({
    question:String,
    answer:Number
})

module.exports = mongoose.model('operations',operations)