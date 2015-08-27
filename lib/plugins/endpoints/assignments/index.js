'use strict';

var Assignment = require('../../../models/assignment');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/assignments',
    config: {
      description: 'Find all assignments',
      handler: function(req, reply){
        Assignment.find({}, function(err, assignments) {
          reply(assignments);
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'assignments.index'
};
