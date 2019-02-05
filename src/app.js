const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')
const Router = new router()
const path = require('path')
const registerRoutes = require('./helpers/register-routes')

registerRoutes(Router, path.join(__dirname, './routes'))

app.use(Router.routes())

app.listen(3000, () => { console.log('API running on port 3000') })