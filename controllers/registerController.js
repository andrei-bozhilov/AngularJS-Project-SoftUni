(function () {
    angular.module('app')

    .controller('RegisterController', function ($scope, $location, user, userSession, notyService) {
        $('#right-side-menu').hide();
        $('#header').text('Ads-Register');

        $scope.username = "";
        $scope.password = "";



        $scope.register = function register() {
            if (!$scope.username == "" && !$scope.password == "") {

                user.register($scope.username, $scope.password)
                .success(function (data) {
                    notyService.success("Register success");
                })
                .error(function (error) {
                    notyService.error(error.error_description);
                })
                .then();
                console.log($scope.username);
                console.log($scope.password);

            };
        }
    })
})
();