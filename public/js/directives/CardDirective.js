angular.module("CardDirective", []).directive("cardDirective", function () {
  return {
    restrict: "E",
    templateUrl: "views/card.html",
    scope: {
    	name: "@",
    	address: "@"
    }
  };
});