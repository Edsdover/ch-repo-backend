'use strict';

var User = require('../../../models/user');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/users/{studentId}',
    config: {
      description: 'Find User by Id',
      handler: function(req, reply){
        User.find({ _id: req.params.studentId}, function(err, user) {
          return reply(user);
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'users.findById'
};
