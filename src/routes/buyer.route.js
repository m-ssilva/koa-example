const controller = require('../controller/buyer.controller')
const urlBase = '/api/buyer'

module.exports = [{
    method: 'get',
    path: urlBase,
    action: controller.getAll
},
{
    method: 'post',
    path: urlBase,
    action: controller.post
}]