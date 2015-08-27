'use strict';

var Assignment = require('../../../models/assignment');
// var Joi = require('joi');

exports.register = function(server, options, next){
  server.route({
    method: 'POST',
    path: '/assignments',
    config: {
      description: 'Save a new assignment',
      // validate: {
      //   payload: {
      //     name: Joi.string().required(),
      //     body: Joi.string().required(),
      //     _id: Joi.string(),
      //   }
      // },
      handler: function(request, reply){
        var assignment = new Assignment(request.payload);
        console.log(request.payload);
        assignment.cohortName = request.payload.cohortName;
        assignment.save(saveCb);
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
  name: 'assignments.save'
};
