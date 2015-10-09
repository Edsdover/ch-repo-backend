'use strict';

var Mongoose = require('mongoose');
var SubmittedContent;

var submittedContentSchema = Mongoose.Schema({
  userName: {type: String},
  userId: {type: String},
  submittedInput: {type: String},
  createdAt: {type: Date, default: Date.now},
  assignmentId: {type: String},
  functionalityPoints: {type: Number},
  htmlPoints: {type: Number},
  javascriptPoints: {type: Number},
  readabilityPoints: {type: Number},
  gradedPoints: {type: Number},
  instructorNotes: {type: String},
  cohortName: {type: String},
  isSubmitted: {type: Boolean, default: false},
  isGraded: {type: Boolean, default: false},
});

SubmittedContent = Mongoose.model('SubmittedContent', submittedContentSchema);
module.exports = SubmittedContent;
