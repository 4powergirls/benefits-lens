// grab the mongoose module
var mongoose = require('mongoose');
var db = require('../../config/db');
var dbmongo = mongoose.createConnection(db.url);

var company = dbmongo.model('Company', {
  id: {type: Number},
  name: {type: String},
  size: {min: Number, max: Number},
  industry: {type: String, default: ""},
  url: {type: String},
  maternityLeaveLength: {type: Number},
  paternityLeaveLength: {type: Number},
  paidSickLeave: {type: Number},
  paidTimeOff: {type: Number},
  mothersRoom: {type: Boolean},
  teleCommute: {type: Boolean},
  paidMedicalInsurance: {type: Boolean},
  paidVisionInsurance: {type: Boolean},
  onsiteDayCare: {type: Boolean},
  location: {type: String}
});


company.create(
 {
   id: 1,
   name: 'Facebook',
   size: {min: 10000, max: 20000},
   industry: 'Internet',
   url: 'http://facebook.com',
   maternityLeaveLength: 16,
   paternityLeaveLength: 16,
   paidSickLeave: 16,
   paidTimeOff: 16,
   mothersRoom: true,
   teleCommute: true,
   paidMedicalInsurance: true,
   paidVisionInsurance: true,
   onsiteDayCare: true,
   location: 94043
 },
    function (err, small) {
      if (err) return handleError(err);
      // saved!
 });

module.exports = company;
