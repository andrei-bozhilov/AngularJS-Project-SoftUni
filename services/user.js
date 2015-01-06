(function () {

    angular.module('app')

    .factory('user', ['baseUrl', 'requester', function (baseUrl, requester) {

        var url = "",
            data = {};


        var user = {
            register: function (username, password, confirmPassword, name, email, phone, townId) {
                url = baseUrl + '/user/register';
                data = {
                    username: username,
                    password: password,
                    confirmPassword: confirmPassword,
                    name: name,
                    email: email,
                    phone: phone,
                    townId: townId
                }

                return requester.post(url, data);
            },

            login: function (username, password) {
                url = baseUrl + '/user/login';
                data = {
                    username: username,
                    password: password
                }

                return requester.post(url, data);
            }



        };

        return user;
    }]);
})()