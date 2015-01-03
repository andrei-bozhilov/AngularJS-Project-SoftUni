(function () {
    angular.module('app')

    .factory('townsModel', function (baseUrl, requester) {
        var url = baseUrl + "/towns"
        var townsModel = {
            getAll: function () {
                return requester.get(url);
            }

        };


        return townsModel;
    })
}());