const handler = require('../controller/index')

module.exports = {
    methods: ['GET'],
    path: '/',
    middleware: [handler]
}