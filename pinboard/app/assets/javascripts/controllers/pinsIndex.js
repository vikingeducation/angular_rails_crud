pinboard.controller('pinsIndexCtrl',
                    [ '$scope', 'pins', 'Restangular',
                    function($scope, pins, Restangular){

  $scope.pins = pins;
  $scope.newPin = {};
  $scope.user = pins[0].user;

  $scope.createPin = function(){

    Restangular.all('pins').post(
          { pin: {  item_name:    $scope.newPin.item_name,
                    buy_string:   $scope.newPin.buy_string,
                    description:  $scope.newPin.description,
                    user_id:      $scope.user.id }})

                          .then(function(createdPin){
                                $scope.pins.push(createdPin);
                                $scope.newPin = {};
                              });

  };

  $scope.deletePin = function(pin){
    var idx = pins.indexOf(pin);
    console.log($scope.pins, idx, pin);
    $scope.pins[idx].remove().then(function(){
      $scope.pins.splice(idx, 1);
    });
  };

}]);




  $scope.createUser = function(){

  };

  $scope.signIn = function(){

  }

    angular.module('myModule', ['Devise']).
    controller('myCtrl', function(Auth) {
        var credentials = {
            email: 'user@domain.com',
            password: 'password1',
            password_confirmation: 'password1'
        };
        var config = {
            headers: {
                'X-HTTP-Method-Override': 'POST'
            }
        };

        Auth.register(credentials, config).then(function(registeredUser) {
            console.log(registeredUser); // => {id: 1, ect: '...'}
        }, function(error) {
            // Registration failed...
        });

        $scope.$on('devise:new-registration', function(event, user) {
            // ...
        });
    });