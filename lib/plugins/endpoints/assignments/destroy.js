'use strict';

var Assignment = require('../../../models/assignment');

exports.register = function(server, options, next){
  server.route({
    method: 'DELETE',
    path: '/assignments/{assignmentId}',
    config: {
      description: 'Destroy one project',
      handler: function(request, reply){
        Assignment.findOne({_id: request.params.assignmentId}, function(err, assignment){
          assignment.remove(function(){
            reply(request.params);
          });
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'assignment.destroy'
};
