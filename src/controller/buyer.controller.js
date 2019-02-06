const buyerRepository = require('../repositories/buyer.repository')

exports.getAll = async (ctx) => {
    await buyerRepository.getAll()
        .then((buyers) => {
            ctx.status = 200
            ctx.body = buyers
        }).catch((err) => {
            ctx.status = 500
            ctx.body = err
        })
}

exports.getById = async (ctx) => {
    await buyerRepository.getById(ctx.params.id)
        .then((buyer) => {
            ctx.status = 200
            ctx.body = buyer
        }).catch((err) => {
            ctx.status = 500
            ctx.body = err
        })
}

exports.post = async (ctx) => {
    let buyer = ctx.request.body
    await buyerRepository.create(buyer)
        .then((buyer) => {
            ctx.status = 200
            ctx.body = {
                message: 'Buyer created.',
                id: buyer._id
            }
        }).catch((err) => {
            ctx.status = 500
            ctx.body = err
        })
}