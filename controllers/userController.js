(function () {
    angular.module('app')

    .controller('UserController', function ($scope, $location, userSession, notyService) {
        $('#right-side-menu').show();
        $('#header').text('Ads-Home');

        $scope.user = userSession.getCurrentUser();



    })
}());