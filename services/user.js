﻿(function () {

    angular.module('app')

    .factory('user', ['baseUrl', 'requester', function (baseUrl, requester) {

        var url = baseUrl + 'users';

        var user = {
            register: function (username, password) {
                var data = {
                    username: username,
                    password: password
                }

                return requester.post(url, data);
            },

            login: function (username, password) {

            }



        };

        return user;
    }]);
})()