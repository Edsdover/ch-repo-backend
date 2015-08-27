'use strict';

var User = require('../../../models/user');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/users{studentIds}',
    config: {
      description: 'Find Users by Id',
      handler: function(req, reply){
        console.log(req.params.studentIds);
        var studentIds = req.params;
        User.find({ _id: req.params}, function(err, users) {
          return reply(users);
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'users.findById'
};
