'use strict';

var Mongoose = require('mongoose');

var cohortSchema = Mongoose.Schema({
  cohortName: {type: String},
  cohortStudentIds: {type: Array, required: true}
});

var Cohort = Mongoose.model('Cohort', cohortSchema);
module.exports = Cohort;
