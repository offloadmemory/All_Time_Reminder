angular.module('home', [])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: "app/home/home.tpl.html", controller: "HomeController"})
}])

.controller('HomeController', ['$scope','$http', function($scope,$http){
	$scope.persons = [];

	$http.get('/getAllBirthdays').then(function(response){
		$scope.persons = response.data;
	});	
}]);