'use strict';

var Assignment = require('../../../models/assignment');
// var Joi = require('joi');

exports.register = function(server, options, next){
  server.route({
    method: 'PUT',
    path: '/assignments/update',
    config: {
      description: 'Update an assignment',
      // validate: {
      //   payload: {
      //     cohortName: Joi.string(),
      //     cohortId: Joi.string(),
      //     introName: Joi.string(),
      //     introId: Joi.string(),
      //     projectName: Joi.string(),
      //     projectId: Joi.string(),
      //     functionalityPoints: Joi.number(),
      //     readabilityPoints: Joi.number(),
      //     htmlPoints: Joi.number(),
      //     dueDate: Joi.date(),
      //     createdAt: Joi.date(),
      //     javascriptPoints: Joi.number(),
      //     _id: Joi.string(),
      //     __v: Joi.number(),
      //   }
      // },
      handler: function(request, reply){
        Assignment.findByIdAndUpdate(request.payload._id, request.payload, saveCb);
        function saveCb(err, assignment){
          if(err){
            return reply(JSON.stringify(err)).code(400);
          }else{
            return reply(assignment);
          }
        }
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'assignments.update'
};
