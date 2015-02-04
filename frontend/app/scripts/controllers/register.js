'use strict';

angular.module('psJwtApp')
.controller('RegisterCtrl', function ($scope, $http, alert, authToken) {
	var url = 'http://localhost:3000/register';
	var user = {};

  $scope.submit = function() {

    user = {
      email: $scope.email,
      password: $scope.password
    };

  	$http.post(url, user)
  	.success(function(res){
      alert('success', 'Accout Created', 'Welcome, ' + res.user.email + '!');
      authToken.setToken(res.token);
  	})
		.error(function(err){
  		alert('warning', 'Ooops!', 'Could not register');
  	})
  	;
  };
});
