var Benefits = require('./models/benefits');
var Company = require('./models/company');

// get all benefits
var getBenefits = function (res) {
  Benefits.find(function(err, benefits) {
    if (err) {
      res.send(err);
    }
    res.json(benefits);  
  });
};

module.exports = function (app) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes
  app.get("/api/benefits", function(req, res) {
    getBenefits(res);
  });

  // frontend routes =========================================================
  // route to handle all angular requests
  var path = require("path");
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
  });
};
