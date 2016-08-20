angular.module('cards', [])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/cards", {templateUrl: "app/cards/cards.tpl.html", controller: "CardsController"})
}])

.controller('CardsController',  ['$scope','$http', function($scope,$http){
	
}]);