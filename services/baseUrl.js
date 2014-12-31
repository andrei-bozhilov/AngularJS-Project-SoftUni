(function () {
    angular.module('app')

    .factory('baseUrl', function () {
        return "http://localhost:1337/api/";
    });
}())