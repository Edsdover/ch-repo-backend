'use strict';

var Project = require('../../../models/project');

exports.register = function(server, options, next){
  server.route({
    method: 'DELETE',
    path: '/projects/{projectId}',
    config: {
      description: 'Destory one project',
      handler: function(request, reply){
        Project.findOne({_id: request.params.projectId}, function(err, project){
          project.remove(function(){
            reply(request.params);
          });
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'projects.destroy'
};
