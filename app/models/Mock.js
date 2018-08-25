var mongoose = require('mongoose');

var schema = mongoose.Schema({
    id: { 
        type: String, 
        required: true
    }, 
    response: {
        required: true,
        type: String,
    },
    date:{
        require:true,
        type:Date
    }


});

module.exports = mongoose.model('Mock', schema);