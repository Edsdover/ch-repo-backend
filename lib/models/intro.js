'use strict';

var Mongoose = require('mongoose');

var introSchema = Mongoose.Schema({
  name: {type: String},
  body: {type: String}
});

var Intro = Mongoose.model('Intro', introSchema);
module.exports = Intro;
