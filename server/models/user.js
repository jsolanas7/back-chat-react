const mongoose = require('mongoose');

let Schema = mongoose.Schema;



let userSchema = new Schema({
    firstName: {
        type: String
    },
    surName: {
        type: String,
    },
    email:{
        type: String
    },
    password: {
        type: String
    }
});


module.exports = mongoose.model('user', userSchema);