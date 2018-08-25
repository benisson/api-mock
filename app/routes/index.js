const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let Mock = require('../models/Mock');




// Rota inicial
router.get('/', (req, res) => {

    console.log("Veio até aqui!");

    if (mongoose.connection.readyState) {
        Mock.find({}).then((mock) => {
            res.send({ response: mock })
        })
    } else {
        res.send({'error':'ops... deu errado...'})
    }
})


// Seed nos arquivos
router.post('/incluir', (req, res) => {

    Mock.insertMany(req.body).then(moogoseDocuments => 
        {
            console.log(moogoseDocuments, "Inseridos com sucesso");

            res.send("Mocks salvo com sucesso.");
        }).catch(err => {
            console.log(err);
            res.send(err);
        })
       

})




// Seed nos arquivos
router.get('/mock', (req, res) => {
    let mocks = [
        new Mock({
            id: "1",
            response: "{'nomeProponente':'João da Silva lima', 'numeroProposta':1231231, }",
        }),
        new Mock({
            id: "2",
            response: "{'nomeProponente':'JOGER DA SILVA', 'numeroProposta':98343999, }",
        }),
    ]

    Mock.insertMany(mocks).then(moogoseDocuments => 
    {
        console.log(moogoseDocuments, "Inseridos com sucesso")
    }).catch(err => {
        console.log(err)
    })
    res.send("Mocks salvo com sucesso.");

})

module.exports = router;