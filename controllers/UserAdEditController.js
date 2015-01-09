(function () {
    angular.module('app')

    .controller('UserAdEditController', function ($scope, $location, $routeParams, notyService, user, userSession, jQueryService) {

        jQueryService.logUser('My Ads', false, false, "Ads - Edit Ad");

    });
}());