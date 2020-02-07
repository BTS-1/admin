const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Podcast = new Schema({
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
    collection: 'podcasts'
});

module.exports = mongoose.model('Podcast', Podcast);