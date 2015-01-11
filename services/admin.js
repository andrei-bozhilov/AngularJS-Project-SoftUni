(function () {

    angular.module('app')

    .factory('admin', ['baseUrl', 'requester', function (baseUrl, requester) {

        var url = "",
            data = {},
            headers = {};


        var admin = {
            getUserAds: function (userToken, addDataObj) {
                url = baseUrl + '/admin/ads';
                data = addDataObj;
                headers.Authorization = 'Bearer ' + userToken;

                return requester.get(url, headers, data);

            },

            approve: function (id, userToken) {
                url = baseUrl + '/admin/ads/approve/' + id;
                headers.Authorization = 'Bearer ' + userToken;

                return requester.put(url, null, headers);
            },

            reject: function (id, userToken) {
                url = baseUrl + '/admin/ads/reject/' + id;
                headers.Authorization = 'Bearer ' + userToken;

                return requester.put(url, null, headers);
            },

            publishAgainAd: function (id, userToken) {
                url = baseUrl + '/user/ads/publishagain/' + id;
                headers.Authorization = 'Bearer ' + userToken;

                return requester.put(url, null, headers);
            },

            getUserAdByID: function (id, userToken) {
                url = baseUrl + '/user/ads/' + id;
                headers.Authorization = 'Bearer ' + userToken;

                return requester.get(url, headers);
            },

            editUserAd: function (id, userToken, data) {
                url = baseUrl + '/user/ads/' + id;
                headers.Authorization = 'Bearer ' + userToken;

                return requester.put(url, data, headers);
            },

            deleteUserAd: function (id, userToken) {
                url = baseUrl + '/user/ads/' + id;
                headers.Authorization = 'Bearer ' + userToken;

                return requester.delete(url, headers);
            },

            getUserProfile: function (userToken) {
                url = baseUrl + '/user/profile';
                headers.Authorization = 'Bearer ' + userToken;

                return requester.get(url, headers);
            },

            editUserProfile: function (userToken, data) {
                url = baseUrl + '/user/profile';
                headers.Authorization = 'Bearer ' + userToken;

                return requester.put(url, data, headers);
            },

            changeUserPassword: function (userToken, data) {
                url = baseUrl + '/user/changePassword';
                headers.Authorization = 'Bearer ' + userToken;

                return requester.put(url, data, headers);
            }
        };

        return admin;
    }]);
})()