(function () {
    angular.module('app')

    .controller('UserAdDeleteController', function ($scope, $location, $routeParams, townsModel, categoriesModel, notyService, user, userSession, jQueryService) {

        jQueryService.logUser('My Ads', false, false, "Ads - Delete Ad");

        var adId = $routeParams.id;
        var token = userSession.getToken();

        user.getUserAdByID(adId, token)
            .success(function (data) {
                $scope.adData = data;
                $scope.adData.changeImage = false;
            })
            .error(function (error) {
                console.log(error);
                notyService.error(error.message);
            });

        $scope.deleteAd = function () {
            user.deleteUserAd(adId, token)
                .success(function (data) {
                    notyService.success(data.message);
                    $location.path('/user/ads');

                })
                .error(function (error) {
                    console.log(error);
                    notyService.error(error.message);
                });
        }
    });
}());