angular.module("appRoutes", []).config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "views/home.html",
      controller: "HomeController"
    })
    .when("/about", {
      templateUrl: "views/about.html",
      controller: "AboutController"
    })
    .when("/search", {
      templateUrl: "views/search.html",
      controller: "SearchController"
    })
    .when("/insights", {
      templateUrl: "views/insights.html",
      controller: "InsightsController"
    });
  $locationProvider.html5Mode(true);
}]);
