const controller = require('../../controller/buyer.controller')
const validator = require('./buyer.validator')

module.exports = [{
    method: 'get',
    path: '/api/buyer',
    action: controller.getAll
},
{
    method: 'get',
    path: '/api/buyer/:id',
    action: controller.getById
},
{
    method: 'post',
    path: '/api/buyer',
    action: controller.post,
    middleware: [validator.post]
}]