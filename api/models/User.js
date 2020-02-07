const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

let User = new Schema({
    id: {
        type: Number
    },
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    type: {
        type: Number
    }
}, {
    collection: 'users'
});
User.plugin(uniqueValidator);
module.exports = mongoose.model('User', User);