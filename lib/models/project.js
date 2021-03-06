'use strict';

var Mongoose = require('mongoose');

var projectSchema = Mongoose.Schema({
  name: {type: String},
  concepts: {type: String},
  tech: {type: String},
  requirements: {type: String},
  notes: {type: String},
  pros: {type: String},
  references: {type: String},
  alternatives: {type: String},
  deployment: {type: String},
  githubURL: {type: String},
  createdAt: {type: Date, default: Date.now}
});

var Project = Mongoose.model('Project', projectSchema);
module.exports = Project;
