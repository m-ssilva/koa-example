const Buyer = require('../models/buyer.model')

exports.getAll = () => {
    return Buyer.find()
}

exports.getById = (id) => {
    return Buyer.findById(id)
}

exports.create = (buyer) => {
    return Buyer.create(buyer)
}