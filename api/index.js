const express = require('express');
const bodyParser = require('body-parser');
/*const mongoClient =  require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;
const CONNECTION_URL = <'dfsdsdsd'>;
const DATABASE_NAME = '';*/

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// var database, collection;
const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Listening on port: ${port}...`);
});

app.get('/', (req, res) => {
	res.send('working');
});
