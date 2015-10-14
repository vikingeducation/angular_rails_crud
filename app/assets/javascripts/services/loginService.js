crudpin.factory('loginService', ['Restangular',
  function(Restangular) {

  var loginService = {};

  loginService.login = function() {
    loginService.currentUser = Restangular.one('users', 1);
  };

  return loginService;

}]);