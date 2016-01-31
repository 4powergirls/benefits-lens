var mongoose = require("mongoose");
var db = require("../../config/db");
var dbmongo = mongoose.createConnection(db.url);

// Static data for Benefits
var benefits = dbmongo.model("benefits", {
  text: {type: String},
  impression: {type: Number}
});

module.exports = benefits;
