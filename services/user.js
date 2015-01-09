(function () {

    angular.module('app')

    .factory('user', ['baseUrl', 'requester', function (baseUrl, requester) {

        var url = "",
            data = {},
            headers = {};


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
            },

            createNewAd: function (userToken, addDataObj) {
                url = baseUrl + '/user/ads';
                data = addDataObj;
                headers.Authorization = 'Bearer ' + userToken;

                return requester.post(url, data, headers);
            },

            getUserAds: function (userToken, addDataObj) {
                url = baseUrl + '/user/ads';
                data = addDataObj;
                headers.Authorization = 'Bearer ' + userToken;

                return requester.get(url, headers, data);

            },

            deactivateAd: function (id, userToken) {
                url = baseUrl + '/user/ads/deactivate/' + id;
                headers.Authorization = 'Bearer ' + userToken;

                return requester.put(url, null, headers);
            },

            publishAgainAd: function (id, userToken) {
                url = baseUrl + '/user/ads/publishagain/' + id;
                headers.Authorization = 'Bearer ' + userToken;

                return requester.put(url, null, headers);
            }




        };

        return user;
    }]);
})()