'use strict';

var Intro = require('../../../models/intro');
var Joi = require('joi');

exports.register = function(server, options, next){
  server.route({
    method: 'POST',
    path: '/intros',
    config: {
      description: 'Save a new intro',
      validate: {
        payload: {
          name: Joi.string().required(),
          body: Joi.string().required(),
          _id: Joi.string(),
        }
      },
      handler: function(request, reply){
        var intro = new Intro(request.payload);
        intro.save(saveCb);
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
  name: 'intros.save'
};
