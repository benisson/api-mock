const Mock = require('../models/Mock');
const mongoose = require('mongoose');

module.exports.incluir = (apiMock, res) =>
    {
        if (mongoose.connection.readyState) {
            
            apiMock.date = new Date();
        
            Mock.insertMany(apiMock)
                .then(moogoseDocuments => 
                {
                    console.log(moogoseDocuments, "Inseridos com sucesso");
                    //res.send("Mocks salvo com sucesso.");
                    res.status(200).json({ message: 'ok' });
                }).catch(err => {
                    console.log(err);
                    res.send(err);
                })
        }
    }


module.exports.consultar = (id) =>
{
   return Mock.find({ 'id': id });
}


module.exports.remover = (id) =>
{
   return Mock.remove({ 'id': id });
}

module.exports.todos = (id) =>
{
   return Mock.find({});
}
module.exports.apagarTodas = () =>
{
    return Mock.deleteMany({})
}