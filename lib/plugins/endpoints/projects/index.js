'use strict';

var Project = require('../../../models/project');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/projects',
    config: {
      description: 'Find all projects',
      handler: function(req, reply){
        Project.find({}, function(err, projects) {
          reply(projects);
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'projects.index'
};
