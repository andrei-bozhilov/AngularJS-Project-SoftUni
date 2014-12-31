
(function () {

    angular.module('app')

    .factory('requester', ['$http', 'baseUrl', 'headers', function ($http, baseUrl, headers) {
        var requester = {};

        function baseRequest(url, method, data, headers) {
            var http = $http(
                        {
                            url: url,
                            method: method,
                            data: JSON.stringify(data) || undefined,
                            headers: headers
                        });

            return http;
        }

        var makeGetRequest = function (url, headers) {
            return baseRequest(url, 'GET', null, headers);
        }

        var makePostRequest = function (url, data, headers) {
            return baseRequest(url, 'POST', data, headers);
        }

        var makePutRequest = function (url, data, headers) {
            return baseRequest(url, 'PUT', data, headers);
        }

        var makeDeleteRequest = function (url, headers) {
            return baseRequest(url, 'DELETE', null, headers);
        }

        requester = {
            get: makeGetRequest,
            post: makePostRequest,
            put: makePutRequest,
            delete: makeDeleteRequest
        }

        return requester;
    }]);
}())