'use strict';

var Cohort = require('../../../models/cohort');
var User = require('../../../models/user');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/cohorts',
    config: {
      description: 'Find all cohorts',
      handler: function(req, reply){
        Cohort.find({}, function(err, cohorts) {
          reply(cohorts);
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'cohorts.index'
};
