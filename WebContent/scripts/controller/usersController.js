app.controller('usersController', function($scope) {
	$scope.usersmessage = 'usersController  usersmessage';
	$scope.userlist = [ {
		"pic" : "shekar.jpg",
		"email" : "shekar@gmail.com",
		"firstname" : "shekar",
		"lastname" : "g",
		"mobile" : 8888888888,
		"userid" : 1
	}, {
		"pic" : "robot.jpg",
		"email" : "ravi900kumar@gmail.com",
		"firstname" : "ravi",
		"lastname" : "kumar",
		"mobile" : 9999999999,
		"userid" : 2
	} ];
});
