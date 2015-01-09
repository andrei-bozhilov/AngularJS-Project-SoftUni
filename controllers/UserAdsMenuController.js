(function () {
    angular.module('app')

    .controller('UserAdsMenuController',
    function ($scope, $location, $routeParams, adsModel, notyService, user, userSession, jQueryService) {


        //event for changing url for filters
        $('#user-ads-menu').on('click', 'li', function (ev) {
            var idObj = $(ev.target).data();

            for (var prop in idObj) {
                $routeParams[prop] = idObj[prop];
            }

            $location.search($routeParams);
            $scope.$apply()
        });

        jQueryService.addActiveClassToLi('user-ads-menu');
    });
}());