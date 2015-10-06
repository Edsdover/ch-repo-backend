'use strict';

var Cohort = require('../../../models/cohort');
var Joi = require('joi');

exports.register = function(server, options, next){
  server.route({
    method: 'PUT',
    path: '/cohorts',
    config: {
      description: 'Update a cohort',
      validate: {
        payload: {
          cohortName: Joi.string(),
          cohortStudentIds: Joi.string(),
          cohortEmail: Joi.string(),
          createdAt: Joi.string(),
          _id: Joi.string(),
          __v: Joi.number(),
        }
      },
      handler: function(request, reply){
        Cohort.findByIdAndUpdate(request.payload._id, request.payload, saveCb);
        function saveCb(err, cohort){
          if(err){
            return reply(JSON.stringify(err)).code(400);
          }else{
            return reply(cohort);
          }
        }
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'cohorts.update'
};
