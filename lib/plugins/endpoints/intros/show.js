'use strict';

var Intro = require('../../../models/intro');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/intros/{introId}',
    config: {
      description: 'Show a single intro',
      handler: function(request, reply){
        Intro.findById(request.params.introId, function(err, intro){
          return reply(intro);
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'intros.showOne'
};
