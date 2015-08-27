'use strict';

var Project = require('../../../models/project');
var Joi = require('joi');

exports.register = function(server, options, next){
  server.route({
    method: 'POST',
    path: '/projects',
    config: {
      description: 'Create a project',
      validate: {
        payload: {
          name: Joi.string().required(),
          concepts: Joi.string(),
          tech: Joi.string(),
          requirements: Joi.string(),
          notes: Joi.string(),
          pros: Joi.string(),
          references: Joi.string(),
          alternatives: Joi.string(),
          deployment: Joi.string(),
          // functionalityPoints: Joi.number(),
          // readabilityPoints: Joi.number(),
          // htmlPoints: Joi.number(),
          // javascriptPoints: Joi.number(),
          // inputTitle: Joi.string(),
          // inputPoints: Joi.number(),
          githubURL: Joi.string(),
        }
      },
      handler: function(request, reply){
        var project = new Project(request.payload);
        project.save(saveCb);
        function saveCb(err, project){
        if(err){
          return reply(JSON.stringify(err)).code(400);
        }else{
          return reply(project);
        }
      }
    }
  }
});

  return next();
};

exports.register.attributes = {
  name: 'projects.save'
};
