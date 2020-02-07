const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Music = new Schema({
    title: {
        type: String
    },
    url: {
        type: String
    },
    other: {
        type: String
    }
}, {
    collection: 'music'
});

module.exports = mongoose.model('Music', Music);