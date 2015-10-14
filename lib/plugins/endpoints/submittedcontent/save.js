'use strict';

var SubmittedContent = require('../../../models/submittedContent');
var Joi = require('joi');

exports.register = function(server, options, next){
  server.route({
    method: 'POST',
    path: '/submittedcontent',
    config: {
      description: 'Create submitted content',
      validate: {
        payload: {
          userName: Joi.string(),
          userId: Joi.string(),
          submittedInput: Joi.string(),
          createdAt: Joi.date(),
          assignmentId: Joi.string(),
          // points: Joi.number(),
          functionalityPoints: Joi.number(),
          htmlPoints: Joi.number(),
          javascriptPoints: Joi.number(),
          readabilityPoints: Joi.number(),
          gradedPoints: Joi.number(),
          instructorNotes: Joi.string(),
          cohortName: Joi.string(),
          isSubmitted: Joi.boolean(),
          isGraded: Joi.boolean(),
        }
      },
      handler: function(request, reply){
        var submittedcontent = new SubmittedContent(request.payload);
        submittedcontent.save(saveCb);
        function saveCb(err, content){
        if(err){
          return reply(JSON.stringify(err)).code(400);
        }else{
          return reply(content);
        }
      }
    }
  }
});

  return next();
};

exports.register.attributes = {
  name: 'submittedcontent.save'
};
