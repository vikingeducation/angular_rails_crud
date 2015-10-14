crudpin.factory('loginService', ['Restangular',
  function(Restangular) {

  var loginService = {};

/*
  loginService.login = function() {
    Restangular.one('users', 1).get()
      .then( function(user) {
        loginService.currentUser = user;
    });
  };
*/

  loginService.currentUser = JSON.parse("{\"id\":1,\"username\":\"Abe\",\"created_at\":\"2015-10-11T12:53:39.213Z\",\"updated_at\":\"2015-10-11T12:53:39.213Z\"}");

  return loginService;

}]);