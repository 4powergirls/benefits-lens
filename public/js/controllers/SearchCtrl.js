angular.module("SearchCtrl", ["ui.bootstrap-slider", "uiSwitch"]).controller("SearchController", function($scope, $http, $httpParamSerializer) {
  $scope.tagline = "Search!";
  $scope.filter = {
    mothersRoom: false,
    paidMedicalInsurance: false,
    teleCommute: false,
    onsiteDayCare: false,
    size: {
      min: 0,
      max: 100
    }
  };
  $scope.step = 10;
  var submitFilter = function (){
    $http.get("/api/companies?" + $httpParamSerializer($scope.filter)).
      then(function (res, data) {
        console.log("Response result is", JSON.stringify(res.data));
      }
    );
  };

  $scope.onPaternityStop = function ($event, value) {
    console.log("paternity slider stopped", value);
    submitFilter();
  };

  $scope.onMaternityStop = function ($event, value) {
    console.log("maternity slider stopped");
    submitFilter();
  };

  $scope.onPtoStop = function ($event, value) {
    console.log("pto slider stopped");
    submitFilter();
  };

  $scope.mothersRoomChanged = function ($event, value) {
    console.log("Mothers room changed");
    submitFilter();
  };

  $scope.medicalInsuranceChanged = function ($event, value) {
    console.log("Medical Insurance changed");
    submitFilter();
  };

  $scope.telecommuteChanged = function ($event, value) {
    console.log("Telecommute changed");
    submitFilter();
  };

  $scope.daycareChanged = function ($event, value) {
    console.log("Day Care changed");
    submitFilter();
  };
});
