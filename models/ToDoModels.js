const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema ({
    text:{
        type:String,
        require:true,
    }

})

module.exports = mongoose.model('ToDo',TodoSchema)
