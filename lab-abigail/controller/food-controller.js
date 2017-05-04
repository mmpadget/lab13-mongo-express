'use strict';

const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'), {suffix: 'Prom'});
const createError = require('http-errors');
const Food = require('../model/food');

module.exports = exports = {};

const URL = `${__dirname}/../data`;

exports.createItem = function(req, res, food) {

  if(!food) return Promise.reject(createError(400, 'Schema required'));

  new Food(req.body).save()
  .then(food => {
    console.log(food);
    res.json(food);
  })
  .catch(err => res.status(400).send(err.message));
};


exports.updateItem = function(schema, food, id) {

  if(!schema) return Promise.reject(new Error('schema required'));
  if(!id) return Promise.reject(new Error('id required'));

  return fs.readFileProm(`${URL}/${id}.json`)
  .then( oldFood => {
    let stringFood = JSON.parse(oldFood.toString());
    stringFood.name = food.name || stringFood.name;
    stringFood.type = food.type || stringFood.type;
    stringFood.cost = food.cost || stringFood.cost;
    return fs.writeFileProm(`${URL}/${id}.json`, JSON.stringify(stringFood))
    .then(() => stringFood)
    .catch(err => Promise.reject(createError(500, err.message)));

  })
  .catch(err => Promise.reject(createError(500, err.message)));
};

exports.fetchItem = function(id, res) {

  if(!id) return Promise.reject(createError(400, 'id required'));

  Food.findById(id)
  .then(food => {
    console.log(food);
    res.json(food);
  })
  .catch(err => res.status(400).send(err.message));
};

exports.deleteItem = function(schema, id) {

  if(!schema) return Promise.reject(new Error('schema required'));
  if(!id) return Promise.reject(new Error('id required'));

  return fs.unlinkProm(`${URL}/${id}.json`)
  .then(food => food)
  .catch(err => Promise.reject(createError(500, err.message)));
};
