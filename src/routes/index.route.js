const controller = require('../controller/index.controller')
const urlBase = '/api'

module.exports = {
    method: 'get',
    path: urlBase,
    action: controller.get
}