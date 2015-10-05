'use strict';

var User = require('../../../models/user');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/users',
    config: {
      description: 'Find All Users',
      handler: function(req, reply){
        if(req.auth.credentials.firebaseId){
          User.find({}, function(err, users) {
            reply(users);
          });
        }
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'users.index'
};
