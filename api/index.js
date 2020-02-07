const express = require('express'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose'),
config = require('./DB');
const mongoDB = process.env.MONGODB_URI || config.DB;
mongoose.Promise = global.Promise; 
mongoose.connect(mongoDB, { 
	useNewUrlParser: true,
	useUnifiedTopology: false,
	reconnectTries: 30,
	reconnectInterval: 500,
	useFindAndModify: false 
}).then(
	() => {console.log('DB Connected!')},
	err => {console.log('Cannot connect to DB! ' + err)}
);
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const authRoute = require('./routes/auth.route');
const podcastsRoute = require('./routes/podcast.route');
const musicRoute = require('./routes/music.route');
app.use('/podcasts', podcastsRoute);
app.use('/music', musicRoute);
app.use('/auth', authRoute);
const port = process.env.PORT || 5000;
const server  = app.listen(port, () => {
	console.log('Listening on port ' + port);
});
