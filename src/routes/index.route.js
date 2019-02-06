const controller = require('../controller/index.controller')

module.exports = {
    method: 'get',
    path: '/api',
    action: controller.get
}