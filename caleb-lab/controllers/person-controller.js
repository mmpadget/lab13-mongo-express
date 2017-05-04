'use strict';

const debug = require('morgan');
const Promise = require('bluebird');
const createError = require('http-errors');
const Person = require('../models/person.js');
const mongoose = require('mongoose');
mongoose.Promise = Promise;


module.exports = exports = {};

exports.createPerson = function(person){
  debug('#createPerson');
  if(!person) return Promise.reject(createError(400, 'No person; Person required.'));

  return Person(person).save()
  .then(() => person)
  .catch(err => Promise.reject(createError(500, err.message)));
};

exports.fetchPerson = function(id){
  debug('#fetchPerson');
  if(!id) return Promise.reject(createError(400, '!!No ID!! ID Required'));

  return Person.findById(id)
  .then(person => person)
  .catch(err => Promise.reject(createError(500, err.message)));
};

exports.updatePerson = function(id){
  debug('#updatePerson');
  if(!id) return Promise.reject(createError(400, '!!No schema!! Schema Required'));
  // note => {
    // res.json(person);
  return Person.findByIdAndUpdate(id)
  .catch(err => console.error(err))
  .then(() => person)
  .catch(err => Promise.reject(createError(500, err.message)));
};


exports.deletePerson = function(schema, id){
  debug('#deletePerson');
  if(!id) return Promise.reject(createError(400, '!!No id!!'));

  return Person.findByIdAndDelete(id)
  .catch(err => console.error(err))
  .then(() => {
    return Promise.resolve();
  });
};
