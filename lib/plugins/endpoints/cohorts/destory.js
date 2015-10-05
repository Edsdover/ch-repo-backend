'use strict';

var Cohort = require('../../../models/cohort');

exports.register = function(server, options, next){
  server.route({
    method: 'DELETE',
    path: '/cohorts/{cohortId}',
    config: {
      description: 'Destory one cohort',
      handler: function(request, reply){
        Cohort.findOne({_id: request.params.cohortId}, function(err, cohort){
          cohort.remove(function(){
            reply(request.params);
          });
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'cohorts.destroy'
};
