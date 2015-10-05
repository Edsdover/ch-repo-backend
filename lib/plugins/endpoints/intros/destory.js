'use strict';

var Intro = require('../../../models/intro');

exports.register = function(server, options, next){
  server.route({
    method: 'DELETE',
    path: '/intros/{introId}',
    config: {
      description: 'Destory one intro',
      handler: function(request, reply){
        Intro.findOne({_id: request.params.introId}, function(err, intro){
          intro.remove(function(){
            reply(request.params);
          });
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'intros.destroy'
};
