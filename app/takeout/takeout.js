'use strict';

angular.module('myApp.takeout', ['ngRoute'])

		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.when('/takeout', {
				templateUrl: 'takeout/takeout.html',
				controller: 'TakeoutCtrl'
			});
		}])

		.controller('TakeoutCtrl', ['$scope', '$http', function ($scope, $http) {
			$scope.selectedName = '';
			$http.get('http://localhost:8080/restaurants').then(function (response) {

				var result = response.data.map(function (a) {return a.name;});
				/*$.each(response.data, function (index, restaurant) {
				 console.log(restaurant.name);
				 $scope.names.push(restaurant.name);
				 });*/
				$scope.names = result;

			});
			//$scope.names = ["Email", "Tobias", "Linus"];
		}]);