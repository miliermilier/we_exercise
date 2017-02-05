var app = angular.module('we', ['angularUtils.directives.dirPagination']);

app.controller('listdata',function($scope, $http){
	$scope.apartments = []; //declare an empty array
	$http.get("apartmentJson/apartment.json").success(function(response){ 
		$scope.apartments = response;  //ajax request to fetch data into $scope.data
	});
	$scope.sortKey = "popularity";
	$scope.popularityActive = 'active';

	$scope.sort = function(keyname){
		$scope.sortKey = keyname;   //set the sortKey to the param passed
		//$scope.reverse = !$scope.reverse; //if true make it false and vice versa
		if(keyname == "popularity") {
			$scope.popularityActive = 'active';
		} else {
			$scope.popularityActive = '';
		}
		if(keyname == "price") {
			$scope.priceActive = 'active';
		} else {
			$scope.priceActive = '';
		}
	}
	$scope.onApartmentClick=function(e){
		alert(e.name);
		//document.documentElement.innerHTML = e.name;
	}
});