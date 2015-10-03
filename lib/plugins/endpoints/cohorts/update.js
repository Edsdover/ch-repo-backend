'use strict';

var Cohort = require('../../../models/cohort');

exports.register = function(server, options, next){
  server.route({
    method: 'PUT',
    path: '/cohorts/update',
    config: {
      description: 'Update a cohort',
      handler: function(request, reply){
        var cohort = request.payload;
        Cohort.findById(cohort._id, function(err, cohort){
          cohort.save(saveCb);
        });
        function saveCb(err, cohort){
          if(err){
            return reply(JSON.stringify(err)).code(400);
          }else{
            return reply(cohort);
          }
        }
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'cohorts.update'
};
