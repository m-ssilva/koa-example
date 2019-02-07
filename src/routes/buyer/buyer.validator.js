const controller = require('../../controller/buyer.controller')
const validCurrencies = ['BRL', 'USD', 'EUR']

const validatePost = async (body) => {
    const errors = []

    let documentValidator = await controller.getByDocument(body.document)

    if (!body.name) { errors.push({ message: 'Please enter a name', path: 'body.name' }) }
    if (!body.document) { errors.push({ message: 'Please enter a document', path: 'body.document' }) }
    if (!body.currency) { error.push({ message: 'Please enter a currency', path: 'body.currency' }) }
    if (validCurrencies.indexOf(body.currency) == -1) { errors.push({ message: `Please enter a valid currency (${validCurrencies})`, path: 'body.currency' }) }
    if (documentValidator) { errors.push({ message: 'Document already in use', path: 'body.document' }) }

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