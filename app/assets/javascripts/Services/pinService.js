"use strict";
app.factory('PinService', ['Restangular', function(Restangular){
	var obj = {};

	obj.getPins = function(){
		return Restangular.all('pins').getList();
	};

	return obj;
}]);