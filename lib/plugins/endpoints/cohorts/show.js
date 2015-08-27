'use strict';

var Cohort = require('../../../models/cohort');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/cohorts/{cohortId}',
    config: {
      description: 'Show a single cohort',
      handler: function(request, reply){
        Cohort.findById(request.params.cohortId, function(err, cohort){
          return reply(cohort);
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'cohorts.showOne'
};
