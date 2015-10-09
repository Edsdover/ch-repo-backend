'use strict';

var SubmittedContent = require('../../../models/submittedContent');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/submittedcontent',
    config: {
      description: 'Find all submitted content',
      handler: function(req, reply){
        SubmittedContent.find({}, function(err, content) {
          reply(content);
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'submittedcontent.index'
};
