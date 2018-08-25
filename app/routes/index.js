const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Dao = require('../dao/mock-dao.js');


// Rota inicial
router.get('/', (req, res) => {
    console.log("Veio até aqui! oxê....");
    if (mongoose.connection.readyState) {
        Dao.todos().then((mock) => {
            res.send({ response: mock })
        })
    } else {
        res.send({ 'error': 'ops... deu errado...' })
    }
})


router.get('/consultar', (req, res) => {
   
    if (mongoose.connection.readyState) {
        Dao.consultar(req.query.api).then((mock) => {
            res.send(mock)
        })
    } else {
        res.send({ 'error': 'ops... deu errado...' })
    }
})

router.get('/delete-all', (req, res) => {
    Dao.apagarTodas().then(response => {
        console.log(response);
        console.log("deleteMany");
        res.send("db apagado..")
    })
})


router.get('/delete-all', (req, res) => {
    Dao.apagarTodas().then(response => {
        console.log(response);
        console.log("deleteMany");
        res.send("db apagado..")
    })
})

// Seed nos arquivos
router.post('/incluir', (req, res) => {
    const id = req.body.id;
    Dao.consultar(id)
       .then(response => {

            const apiMock = req.body;
            const body = req.body;

            if (response) {
                Dao.remover(id)
                    .then(response => {
                        console.log("mock já existante, excluíndo...");
                        Dao.incluir(apiMock, res);
                    })
            }
            else {
                Dao.incluir(apiMock, resp);
            }

        })

})

module.exports = router;