const express = require('express');
const app = express();
const podcastRoutes  = express.Router();

let Podcasts = require('../models/Podcasts');
podcastRoutes.route('/').get(async (req, res) => {
   const podcasts = await Podcasts.find({});
   try {
       res.send(podcasts);
   } catch (err) {
       res.status(500).send(err);
   }
});
podcastRoutes.route('/add').post(async (req, res) => {
    const podcast = new Podcasts(req.body);
    try {
        await podcast.save();
        res.send(podcast);
    } catch (err) {
        res.status(500).send(err);
    }
});
podcastRoutes.route('/edit/:id').patch(async (req, res) => {
    try {
        const podcast = await Podcasts.findByIdAndUpdate(req.params.id, req.body);
        await podcast.save();
        res.send(podcast);
    } catch (err) {
        res.status(500).send(err)
    }
});
podcastRoutes.route('/delete/:id').delete(async (req,res) => {
  try {
      const podcast = await Podcasts.findByIdAndDelete(req.params.id);
      if (!podcast) {
          res.status(404).send('No podcast found');
      }
      res.status(200).send();
  } catch (err) {
      res.status(500).send(err)
  }
});

module.exports = podcastRoutes;