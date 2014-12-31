(function () {
    angular.module('app')

    .factory('headers', ['userSession', function (userSession) {
        var headers = {
            'X-Parse-Application-Id': 'VYxrKrn7FCw8fQZsVGejCfv1PKpDdH5CrWot4JXC',
            'X-Parse-REST-API-Key': '668yzIp2XY1iVJjjFkP1y2MPrKCYeEeu1RanPJRo'
        }

        var currentUser = userSession.getCurrentUser();
        if (currentUser) {
            headers['X-Parse-Session-Token'] = currentUser.sessionToken;
        }

        return headers;
    }]);
})()