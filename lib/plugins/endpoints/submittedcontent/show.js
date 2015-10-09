'use strict';

var SubmittedContent = require('../../../models/submittedContent');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/submittedcontent/{submittedcontentId}',
    config: {
      description: 'Show submitted content',
      handler: function(request, reply){
        SubmittedContent.findById(request.params.submittedcontentId, function(err, content){
          return reply(content);
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'submittedcontent.showOne'
};
