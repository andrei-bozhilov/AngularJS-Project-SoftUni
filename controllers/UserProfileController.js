(function () {
    angular.module('app')

    .controller('UserProfileController', function ($scope, $location, $routeParams, adsModel, notyService, userSession, jQueryService) {

        jQueryService.logUser('Edit Profile', false, false, "Ads - Edit User Profile");
    });
}());