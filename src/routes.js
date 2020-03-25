const express = require('express');

const routes = express.Router()

routes.get('/users/:id', (request, response) => {
    const params = request.params

    return response.json({
        event: 'Semana Omnistack 11.0',
        student: 'Danilo Santos'
    })
})

routes.post('/users', (request, response) => {
    const body = request.body

    return response.json({
        event: 'Semana Omnistack 11.0',
        student: 'Danilo Santos'
    })
})

module.exports = routes