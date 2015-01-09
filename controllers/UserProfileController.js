(function () {
    angular.module('app')

    .controller('UserProfileController', function ($scope, $location, $routeParams, adsModel, notyService, userSession, jQueryService) {
        //if (!userSession.getCurrentUser()) {
        //    $location.path('/login');
        //}

        jQueryService.logUser('Edit Profile', false);
    });
}());