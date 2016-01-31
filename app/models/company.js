var mongoose = require("mongoose");
var db = require("../../config/db");
var dbmongo = mongoose.createConnection(db.url);

var company = dbmongo.model("Company", {
  name: {type: String},
  maternityLeaveLength: {type: Number},
  paternityLeaveLength: {type: Number},
  paidSickLeave: {type: Number},
  paidTimeOff: {type: Number},
  mothersRoom: {type: Boolean},
  teleCommute: {type: Boolean},
  paidMedicalInsurance: {type: Boolean},
  paidVisionInsurance: {type: Boolean},
  onsiteDayCare: {type: Boolean},
  size: {
    min: {type: Number},
    max: {type: Number}
  },
  location: {type: String},
  industry: {type: String}
});

module.exports = company;
