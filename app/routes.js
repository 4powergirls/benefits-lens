var Benefits = require('./models/benefits');
var Company = require('./models/company');
var qs = require('querystring');

// get all benefits
var getCompanies = function (filter, res) {
  Company.find(filter, function(err, companies) {
    if (err) {
      console.log("Error");
      res.send(err);
    }
    console.log("Returned data", companies);
    res.json(companies);  
  });
};

module.exports = function (app) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes
  app.get("/api/companies", function(req, res) {
    console.log("Query param are", req.query);
    getCompanies(qs.parse(req.query), res);
  });


  // frontend routes =========================================================
  // route to handle all angular requests
  var path = require("path");
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
  });
};
