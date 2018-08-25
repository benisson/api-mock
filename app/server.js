const express = require('express')
let app = express()
let routes = require('./routes');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


// Carrega configurações
let config = require(`./config/config.json`);

//Conecta ao banco
require('./config/database')(`mongodb://${config.databaseConfig.host}:27017/${config.databaseConfig.database}`)

// Configura a porta pela variavel de ambiente ou usa a 3000 como padrão
const port = process.env.port || 3000

//Configura o arquivo de rotas
app.use(routes)

//Inicializa o servidor
app.listen(port, () =>{
     console.log('Server initialiazed on port ' + port) 
})