'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const music = Schema({
  name: {type: String, required: true},
  details: {type: String, max: 1048, required: true},
  date: {type: Date, default: Date.now},
});

module.exports = mongoose.model('note', music);
