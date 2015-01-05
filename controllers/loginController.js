(function () {
    angular.module('app')

    .controller('LoginController', function ($scope, $location, user, userSession, notyService) {
        $('#right-side-menu').hide();
        $('#header').text('Ads-Login');

        $scope.username = "test_user";
        $scope.password = "123";

        //var url = baseUrl + '/user/login';

        $scope.login = function login() {
            if (!$scope.username == "" && !$scope.password == "") {

                user.login($scope.username, $scope.password)
                .success(function (data) {
                    userSession.login(data);
                    notyService.success("Login success");
                    $location.path("/user/home");

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
}());