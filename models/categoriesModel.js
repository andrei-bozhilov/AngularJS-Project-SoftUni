(function () {
    angular.module('app')

    .factory('categoriesModel', function (baseUrl, requester) {

        var url = baseUrl + "/categories";

        var categoriesModel = {
            getAll: function () {
                return requester.get(url);
            }
        }





        return categoriesModel;
    })
}());