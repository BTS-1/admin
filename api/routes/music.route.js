const express = require('express');
const { google } = require('googleapis');
const credentials = require('../credentials.json');
const app = express();
const musicRoutes = express.Router();

let Music = require('../models/Music');

const scopes = [
    'https://www.googleapis.com/auth/drive'
];
const auth = new google.auth.JWT(credentials.client_email, null, credentials.private_key, scopes);
musicRoutes.route('/').get(async (req, res) => {
    let data = null;
    drive.files.list({}, (err, res) => {
        if (err) {
            throw err;
        }
        const files = res.data.files;
        if (files.length) {
            files.map((file) => {
                console.log(file);
            });
        } else {
            data = null;
        }
    });
    res.send({val: 'dddddddddddddddd'});
});


module.exports = musicRoutes;



// TO DO: backend stuff for interacting with google apis