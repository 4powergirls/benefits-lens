angular.module("SearchCtrl", ["ui.bootstrap-slider", "uiSwitch"]).controller("SearchController", function($scope) {
  $scope.tagline = "Search!";
  $scope.filter = {
    mothersRoomEnabled: false,
    medicalInsuranceEnabled: false,
    telecommuteEnabled: false,
    dayCareEnabled: false,
    min: 0,
    max: 100,
    step: 10
  };


  $scope.onPaternityStop = function ($event, value) {
    console.log("paternity slider stopped");
  };

  $scope.onMaternityStop = function ($event, value) {
    console.log("maternity slider stopped");
  };

  $scope.onPtoStop = function ($event, value) {
    console.log("pto slider stopped");
  };

  $scope.mothersRoomChanged = function ($event, value) {
    console.log("Mothers room changed");
  };

  $scope.medicalInsuranceChanged = function ($event, value) {
    console.log("Medical Insurance changed");
  };

  $scope.telecommuteChanged = function ($event, value) {
    console.log("Telecommute changed");
  };

  $scope.daycareChanged = function ($event, value) {
    console.log("Day Care changed");
  };
});
