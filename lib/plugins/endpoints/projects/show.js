'use strict';

var Project = require('../../../models/project');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/projects/{projectId}',
    config: {
      description: 'Show a single project',
      handler: function(request, reply){
        Project.findById(request.params.projectId, function(err, project){
          return reply(project);
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'projects.showOne'
};
