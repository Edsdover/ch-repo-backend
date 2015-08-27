'use strict';

var Project = require('../../../models/project');
var Joi = require('joi');

exports.register = function(server, options, next){
  server.route({
    method: 'PUT',
    path: '/projects',
    config: {
      description: 'Update a project',
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
          _id: Joi.string(),
          __v: Joi.number(),
        }
      },
      handler: function(request, reply){
        Project.findByIdAndUpdate(request.payload._id, request.payload, saveCb);
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
  name: 'projects.update'
};
