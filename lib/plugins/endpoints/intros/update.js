'use strict';

var Intro = require('../../../models/intro');
var Joi = require('joi');

exports.register = function(server, options, next){
  server.route({
    method: 'PUT',
    path: '/intros',
    config: {
      description: 'Update a intro',
      validate: {
        payload: {
          name: Joi.string().required(),
          body: Joi.string().required(),
          createdAt: Joi.date(),
          _id: Joi.string(),
          __v: Joi.number(),
        }
      },
      handler: function(request, reply){
        Intro.findByIdAndUpdate(request.payload._id, request.payload, saveCb);
        function saveCb(err, intro){
          if(err){
            return reply(JSON.stringify(err)).code(400);
          }else{
            return reply(intro);
          }
        }
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'intros.update'
};
