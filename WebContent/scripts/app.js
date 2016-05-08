var app = angular.module('myapp', [ 'ngRoute' ]);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller : 'homeController',
		templateUrl : 'views/home.html'
	});

	$routeProvider.when('/users', {
		controller : 'usersController',
		templateUrl : 'views/user.html'
	});

	$routeProvider.otherwise({
		redirectTo : '/'
	});
});
