'use strict';

var Assignment = require('../../../models/assignment');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/assignments/{assignmentId}',
    config: {
      description: 'Show a single assignment',
      handler: function(request, reply){
        Assignment.findById(request.params.assignmentId, function(err, assignment){
          console.log(assignment);
          return reply(assignment);
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'assignments.showOne'
};
