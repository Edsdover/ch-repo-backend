'use strict';

var User = require('../../../models/user');
// var Joi = require('joi');

exports.register = function(server, options, next){
  server.route({
    method: 'PUT',
    path: '/users',
    config: {
      description: 'Update a user',
      // validate: {
      //   payload: {
      //     name: Joi.string().required(),
      //     concepts: Joi.string(),
      //     tech: Joi.string(),
      //     requirements: Joi.string(),
      //     notes: Joi.string(),
      //     pros: Joi.string(),
      //     references: Joi.string(),
      //     alternatives: Joi.string(),
      //     deployment: Joi.string(),
      //     // functionalityPoints: Joi.number(),
      //     // readabilityPoints: Joi.number(),
      //     // htmlPoints: Joi.number(),
      //     // javascriptPoints: Joi.number(),
      //     // inputTitle: Joi.string(),
      //     // inputPoints: Joi.number(),
      //     githubURL: Joi.string(),
      //     _id: Joi.string(),
      //     __v: Joi.number(),
      //   }
      // },
      handler: function(request, reply){
        var user = request.payload;
        User.findById(user._id, function(err, user){
          if(user.adminUser == true){
            user.adminUser = false;
            user.save(saveCb);
          }else{
            user.adminUser = true;
            user.save(saveCb);
          }
        });
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
