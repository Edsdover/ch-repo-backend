'use strict';

var Intro = require('../../../models/intro');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/intros',
    config: {
      description: 'Find all intros',
      handler: function(req, reply){
        Intro.find({}, function(err, intros) {
          reply(intros);
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'intros.index'
};
