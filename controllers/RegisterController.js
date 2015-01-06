(function () {
    angular.module('app')

    .controller('RegisterController', function ($scope, $location, user, userSession, notyService) {
        $('#right-side-menu').hide();
        $('#header').text('Ads-Register');

        $scope.username = "adi";
        $scope.password = "adi";
        $scope.confirmPassword = "adi";
        $scope.name = "adi";
        $scope.email = "s@s";
        $scope.phone = "123";
        $scope.townId = "";

        $scope.register = function register() {
            if (!$scope.username == "" && !$scope.password == ""
                && !$scope.confirmPassword == "" && !$scope.name == "" && !$scope.email == "") {

                if ($scope.password !== $scope.confirmPassword) {
                    notyService.error("Password and Confirm password are not equal");
                } else {
                    user.register($scope.username, $scope.password, $scope.confirmPassword, $scope.name, $scope.email, $scope.phone, $scope.townId)
                    .success(function (data) {
                        userSession.login(data);
                        notyService.success("Register success");
                        $location.path("/user/home");

                    })
                    .error(function (error) {
                        var errorMsg = error.message;
                        for (var prop in error.modelState) {
                            if (error.modelState.hasOwnProperty(prop)) {
                                errorMsg += " " + error.modelState[prop][0];
                            }
                        }
                        notyService.error(errorMsg);
                    })
                    .then();                    
                }
            };
        }
    })
})
();
