(function () {
    angular.module('app')

    .factory('userSession', function () {
        var userSession = {
            login: function (userObject) {
                sessionStorage['currentUser'] = JSON.stringify(userObject);
            },

            getCurrentUser: function () {
                var userObject = sessionStorage['currentUser'];
                if (userObject) {
                    return JSON.parse(sessionStorage['currentUser']);
                }
            },

            getToken: function () {
                var user = userSession.getCurrentUser();
                return user.access_token;
            },

            logout: function () {
                //  delete sessionStorage['currentUser'];
                sessionStorage.removeItem('currentUser');
            },

        };

        return userSession;
    });
})()