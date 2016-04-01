pinboard.factory('Pins', ['Restangular', function(Restangular) {
    Restangular.extendCollection('pins', function(collection){
        // creates a new post on the server
        // and adds it to the collection
        collection.create = function(pin){
            collection.post(pin).then(function(response) {
                collection.unshift(response);
            });
        };
        return collection;
    });

    Restangular.extendModel('pins', function(model) {
        model.update = function() {
        };
        return model;
    })

    return Restangular.service('pins');
}]);
