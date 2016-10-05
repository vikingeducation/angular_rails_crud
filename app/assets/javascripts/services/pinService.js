"use strict";
angular.module('app').factory('PinService', ['Restangular', function(Restangular){
	var obj = {};

	obj.getPins = function(){
		return Restangular.all('pins').getList();
	};

	obj.create = function(data){
		return Restangular.all('users').getList()
		.then(function(users){
			var firstUser = users[0];
			data.user_id = firstUser.id;
			var pinData = {
				pin: data
			};
			return Restangular.all('pins').post(pinData);
		});

	};

	return obj;

}]);