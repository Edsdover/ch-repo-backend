'use strict';

var Cohort = require('../../../models/cohort');
// var Joi = require('joi');

exports.register = function(server, options, next){
  server.route({
    method: 'POST',
    path: '/cohorts',
    config: {
      description: 'Save a new cohort',
      // validate: {
      //   payload: {
      //     name: Joi.string().required(),
      //     body: Joi.string().required(),
      //     _id: Joi.string(),
      //   }
      // },
      handler: function(request, reply){
        var cohort = new Cohort(request.payload);
        cohort.cohortName = request.payload.cohortName;
        cohort.cohortEmail = request.payload.cohortEmail;
        cohort.save(saveCb);
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
  name: 'cohorts.save'
};
