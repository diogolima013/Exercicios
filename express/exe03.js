const express = require('express')
const server = express()

server.use('/api', function(req, res, next){
    console.log('inicio')
    next()
    console.log('Fimm')
})

server.use('/api', function(req, res) {
    console.log('Resposta...')
    res.send('<h1>API!</h1>')
})

server.listen(3000, () => console.log('Executando...'))
