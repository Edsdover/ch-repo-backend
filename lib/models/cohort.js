'use strict';

var Mongoose = require('mongoose');

var cohortSchema = Mongoose.Schema({
  cohortName: {type: String},
  cohortStudentIds: {type: Array, required: true},
  cohortEmail: {type: String, required: true},
  createdAt: {type: Date, default: Date.now}
});

var Cohort = Mongoose.model('Cohort', cohortSchema);
module.exports = Cohort;
