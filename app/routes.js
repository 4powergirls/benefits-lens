module.exports = function(app) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  // frontend routes =========================================================
  // route to handle all angular requests
  var path = require('path');
  app.get("*", function(req, res) {
  	res.sendFile(path.join(__dirname, '../public', 'index.html'));
  });
};
