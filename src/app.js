const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')
const Router = new router()
const path = require('path')
const registerRoutes = require('./helpers/register-routes')
const bodyParser = require('koa-bodyparser')
const config = require('./config')
const mongoose = require('mongoose')

registerRoutes(Router, path.join(__dirname, './routes'))

app.use(bodyParser())
app.use(Router.routes())
mongoose.connect(config.mongodb.connString, config.mongodb.configs)

app.listen(config.api.port, () => { console.log(`API running on ${config.api.port}`) })