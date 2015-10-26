'use strict';

var User = require('../../../models/user');
var Joi = require('joi');

exports.register = function(server, options, next){
  server.route({
    method: 'PUT',
    path: '/users/edit',
    config: {
      description: 'Update a user',
      validate: {
        payload: {
          firebaseId: Joi.string(),
          createdAt: Joi.date(),
          displayName: Joi.string(),
          email: Joi.string().email(),
          id: Joi.number(),
          profileImageURL: Joi.string(),
          username: Joi.string(),
          cachedUserProfile: Joi.object(),
          adminUser: Joi.boolean(),
          submittedAssignments: Joi.array(),
          _id: Joi.string(),
          __v: Joi.number(),
        }
      },
      handler: function(request, reply){
        User.findByIdAndUpdate(request.payload._id, request.payload, saveCb);
        function saveCb(err, user){
          if(err){
            return reply(JSON.stringify(err)).code(400);
          }else{
            return reply(user);
          }
        }
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'users.update'
};
