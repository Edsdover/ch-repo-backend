'use strict';

var User = require('../../../models/user');

exports.register = function(server, options, next){
  server.route({
    method: 'PUT',
    path: '/users',
    config: {
      description: 'Toggle Admin on a user',
      handler: function(request, reply){
        User.findById(request.payload._id, function(err, user){
          if(user.adminUser === true){ // jshint ignore:line
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
  name: 'users.toggleAdmin'
};
