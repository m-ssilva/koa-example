const controller = require('../../controller/buyer.controller')

const validatePost = async (body) => {
    const errors = []

    if (!body.name) { errors.push({ message: 'Please enter a name', path: 'body.name' }) }
    
    return errors
}

exports.post = async (ctx, next) => {
    const result = await validatePost(ctx.request.body)
    if (result.length > 0) {
        ctx.status = 400
        ctx.body = { errors: result }
    }
    else return next()
}