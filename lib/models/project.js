'use strict';

var Mongoose = require('mongoose');

var projectSchema = Mongoose.Schema({
  name: {type: String, required: true},
  concepts: {type: String},
  tech: {type: String, required: true},
  requirements: {type: String},
  notes: {type: String},
  pros: {type: String},
  references: {type: String},
  alternatives: {type: String},
  deployment: {type: String},
  githubURL: {type: String}
});

var Project = Mongoose.model('Project', projectSchema);
module.exports = Project;
