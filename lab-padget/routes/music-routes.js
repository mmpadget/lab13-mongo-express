'use strict';

const Music = require('../models/music');

module.exports = function(router) {
  router.get('/api/music', (req, res) => {
    if(!req.query.id) {
      Music.find()
      .then()
      .catch();
    } else {
      Music.findById(req.params.id)
      .then(music => {
        console.log(music);
        res.json(music);
      })
      .catch(err => res.status(404).send(err.message));
    }
  });

  router.post('/api/music', (req, res) => {
    new Music(req.body).save()
    .then(music => {
      console.log(music);
      res.json(music);
    })
    .catch(err => res.status(400).send(err.message));
  });

  router.put('/api/music/:id', (req, res) => {
    console.log(res);
  });

  router.delete('/api/music/:id', (req, res) => {
    console.log(res);
  });
};
