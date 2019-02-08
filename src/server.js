const app = require('./app')
const config = require('./config')
const server = app.listen(config.api.port)

console.info(`Listening to http://localhost:${config.api.port}`)

module.exports = {
    app: app,
    server: server
}