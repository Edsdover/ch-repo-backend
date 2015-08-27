/* eslint no-reserved-keys: 0 */

'use strict';

var Mongoose = require('mongoose');
var User;

var userSchema = Mongoose.Schema({
  firebaseId: {type: String},
  createdAt: {type: Date, default: Date.now},
  displayName: {type: String},
  email: {type: String, required: true},
  id: {type: String},
  profileImageURL: {type: String},
  username: {type: String},
  cachedUserProfile: {type: Object},
  adminUser: {type: Boolean, default: false}
});

User = Mongoose.model('User', userSchema);
module.exports = User;
