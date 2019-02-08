const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')
const Router = new router()
const path = require('path')
const registerRoutes = require('./helpers/register-routes')
const bodyParser = require('koa-bodyparser')
const config = require('./config')
const mongoose = require('mongoose')
const logger = require('koa-logger')

registerRoutes(Router, path.join(__dirname, './routes'))

app.use(bodyParser())
app.use(logger())
app.use(Router.routes())

mongoose.connect(config.mongodb.connString, config.mongodb.configs)

module.exports = app