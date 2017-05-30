app.factory('pinService',
  ['Restangular',
    function(Restangular) {

      var _pins = [];

      var all = function all() {
        return Restangular.all('pins').getList().then(function (response) {
          _pins = response;
          // console.log(_pins);
          return _pins;
        });
      };



      return {
        all: all,
      };
}]);
