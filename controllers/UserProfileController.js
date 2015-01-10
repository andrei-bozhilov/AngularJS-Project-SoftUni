(function () {
    angular.module('app')

    .controller('UserProfileController', function ($scope, $location, $routeParams, townsModel, categoriesModel, notyService, user, userSession, jQueryService) {

        jQueryService.logUser('Edit Profile', false, false, "Ads - Edit User Profile");

        var token = userSession.getToken();

        user.getUserProfile(token)
            .success(function (data) {
                console.log(data);
                $scope.userData = data;
            })
            .error(function (error) {
                console.log(error);
            })

    });
}());