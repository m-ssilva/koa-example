const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const route = require('./helpers/register-routes')

route(router, [
    '../routes/index'
])

app.use(router.routes())

app.listen(3000)