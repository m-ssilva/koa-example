const controller = require('../controller/register.controller')
const urlBase = '/api/register'

module.exports = {
    method: 'get',
    path: urlBase,
    action: controller.get,
}