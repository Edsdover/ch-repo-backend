'use strict';

var SubmittedContent = require('../../../models/submittedContent');

exports.register = function(server, options, next){
  server.route({
    method: 'DELETE',
    path: '/submittedcontent/{submittedcontentId}',
    config: {
      description: 'Destory user content',
      handler: function(request, reply){
        SubmittedContent.findOne({_id: request.params.submittedcontentId}, function(err, content){
          content.remove(function(){
            reply(request.params);
          });
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'submittedcontent.destroy'
};
