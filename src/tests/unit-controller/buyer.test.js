const request = require('supertest')
const app = require('../../server')
const _ = require('lodash')

beforeAll(async () => {
    request.agent(app.app.listen())
    console.log('Jest starting!')
})

afterAll(async () => {
    app.server.close()
    console.log('Server closed')
})

describe('Testing routes', () => {
    test('get index route GET /api', async () => {
        const response = await request(app.server).get('/api')
        expect(response.status).toEqual(200)
        expect(response.type).toEqual('application/json')
    })

    test('get buyers GET /api/buyer', async () => {
        const response = await request(app.server).get('/api/buyer')
        expect(response.status).toEqual(200)
        expect(response.type).toEqual('application/json')
        expect(Array.isArray(response.body)).toBe(true)
    })
})