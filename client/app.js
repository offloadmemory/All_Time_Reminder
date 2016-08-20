
angular.module('BirthyApp', [
	'ngRoute',
	'home',
	'cards'
])

.controller('HeaderController', ['$scope','$location', function($scope,$location){
	  setActiveMenu($location.$$path);
     
      $scope.$on('$routeChangeStart', function(next, current) { 
    	   setActiveMenu(current.$$route.originalPath);
      });

	  function setActiveMenu(currentPath){
	  	  var pathString      = "'#"+currentPath+"'",
			  oldActiveMenu   = document.querySelectorAll('#main-menu li.active'),
			  curntActiveMenu = document.querySelector("a[href="+pathString+"]");
		     	  
		   $(oldActiveMenu).removeClass('active');
		   $(curntActiveMenu.parentElement).addClass('active');			    	  
	  }		
}]);
