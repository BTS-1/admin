const express = require('express');
const app = express();
const authRoutes  = express.Router();
let User = require('../models/User');

authRoutes.route('/').get(async (req, res) => {
   const users = await User.find({});
   try {
       res.send(users);
   } catch (err) {
       res.status(500).send(err);
   }
});
authRoutes.route('/add').post(async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
});
authRoutes.route('/login').post(async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if ((user) && (user.password === req.body.password.toLowerCase())) {
        res.send(user)
    } else {
        res.status(500).send('Error!');
    }
});
module.exports = authRoutes;