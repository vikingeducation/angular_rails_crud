pinBoard.factory('pinService', 
	['Restangular', function(Restangular) {

	var service = {};

	service.getAll = function() {
		return Restangular.all('pins').getList();
	}

	return service;

}])