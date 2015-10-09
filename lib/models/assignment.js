'use strict';
var Mongoose = require('mongoose');

var assignmentSchema = Mongoose.Schema({
  cohortName: {type: String},
  cohortEmail: {type: String},
  cohortId: {type: String},
  introName: {type: String},
  introId: {type: String},
  projectName: {type: String},
  projectId: {type: String},
  createdAt: {type: Date, default: Date.now},
  dueDate: {type: Date, required: true},
  functionalityPoints: {type: Number},
  htmlPoints: {type: Number},
  javascriptPoints: {type: Number},
  readabilityPoints: {type: Number},
});

var Assignment = Mongoose.model('Assignment', assignmentSchema);
module.exports = Assignment;
