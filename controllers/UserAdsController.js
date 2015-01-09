(function () {
    angular.module('app')

    .controller('UserAdsController', function ($scope, $location, $routeParams, adsModel, notyService, userSession, jQueryService) {
       

        jQueryService.logUser('My Ads', false);

     
    });
}());