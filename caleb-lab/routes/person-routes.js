'use strict';

const createError = require('http-errors');
const Person = require('../models/person.js');
const jsonParser = require('body-parser').json();
const personCtrl = require('../controllers/person-controller.js');


module.exports = function(router){
  //get one
  // router.get('/api/person/', (req, res) => {
  //   if(!req.body.id) return res.status(400).send(Error('you done fucked up'));
  //   Person.find(req.body.id)
  //   .then(note => {
  //     console.log(note);
  //     res.json(note);
  //   })
  //   .catch(err => res.status(404).send(err.message));
  // });

  //all
  router.get('/api/person', (req, res) => {
    if(!req.params.id) return res.status(400).send(createError('you done fucked up, boy.'));
    personCtrl.fetchPerson(req.params.id)
    .then(person => {
      console.log(person);
      res.json(person);
    })
    .catch(err => res.status(404).send(err.message));
  });


  // post new person
  router.post('/api/person', (req, res) => {
    console.log('something is happening');
    personCtrl.createPerson(req.body)
    .then(person => {
      console.log(person);
      res.json(person);
    })
    .catch(err => {
      console.log('inside catch');
      res.status(400).send(err.message);
    });
  });


  //update person
  // router.put('/api/person/', (req, res) => {
  //
  // });
  //
  //
  // //delete a person
  // router.delete('/api/person/', (req, res) => {
  //
  // });
};
