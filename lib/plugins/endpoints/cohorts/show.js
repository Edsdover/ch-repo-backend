'use strict';

var Cohort = require('../../../models/cohort');
var User = require('../../../models/user');

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
        User.find({}, function(err, users) {
          reply(users);
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'cohorts.showOne'
};
