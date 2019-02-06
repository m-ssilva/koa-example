'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const config = require('../config')

//mongoose.connect(config.mongodb.connString, config.mongodb.configs)

const BuyerSchema = new Schema({
    'name': { type: String, required: true },
    'document': { type: String, required: true },
    'currency': { type: String, required: true },
    'created_date': { type: Date, default: Date.now },
    'update_date': { type: Date, default: Date.now }
})

const Buyer = mongoose.model('Buyer', BuyerSchema)
module.exports = Buyer