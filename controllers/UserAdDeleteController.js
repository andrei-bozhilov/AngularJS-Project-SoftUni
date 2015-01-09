(function () {
    angular.module('app')

    .controller('UserAdDeleteController', function ($scope, $location, $routeParams, notyService, user, userSession, jQueryService) {

        jQueryService.logUser('My Ads', false, false, "Ads - Delete Ad");

    });
}());