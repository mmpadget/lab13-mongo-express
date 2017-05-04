'use strict';

const Food = require('../model/food');
const foodController = require('../controller/food-controller');

module.exports = function(router) {

  router.post('/api/food', (req, res) => {
    foodController.createItem(req, res, req.body);
  });

  router.get('/api/food/:id', (req, res) => {
    foodController.fetchItem(req.params.id, res);
  });

  router.delete('/api/food/:id', (req, res) => {
    Food.findByIdAndRemove(req.params.id)
    .then(food => {
      console.log(food);
      res.sendStatus(204);
    })
    .catch(err => res.status(400).send(err.message));
  });
  //
  // router.put('/api/food', (req, res) => {
  //   Food.findOneAndUpdate(req.params.id,
  //   .then(food => {
  //     console.log(food);
  //     res.sendStatus(200).send('Item removed');
  //   })
  //   .catch(err => res.status(400).send(err.message));
  // });
};
