(function () {
    angular.module('app')

    .controller('UserProfileController', function ($scope, $location, $routeParams, townsModel, categoriesModel, notyService, user, userSession, jQueryService) {

        jQueryService.logUser('Edit Profile', false, false, "Ads - Edit User Profile");

        var token = userSession.getToken();
        $scope.password = {
            oldPassword: "",
            newPassword: "",
            confirmPassword: ""
        }


        $scope.userData = {
            townId: ""
        };

        townsModel.getAll()
            .success(function (data) {
                $scope.towns = data;
            })
            .error(function (error) {
                consol.log(error);
                notyService.error(error.message);
            });

        user.getUserProfile(token)
            .success(function (data) {
                console.log(data);
                $scope.userData = data;
            })
            .error(function (error) {
                console.log(error);
            });

        $scope.updateUserProfile = function () {
            if (!!$scope.userData.name && !!$scope.userData.email &&
                !!$scope.userData.phoneNumber) {

                user.editUserProfile(token, $scope.userData)
                    .success(function (data) {
                        notyService.success(data.message);
                    })
                    .error(function (error) {
                        console.log(error);
                        notyService.error(error.message);
                    });
            }
        };

        $scope.changeUserPassword = function () {
            if (!!$scope.password.oldPassword && !!$scope.password.newPassword &&
               !!$scope.password.confirmPassword) {
                user.changeUserPassword(token, $scope.password)
                    .success(function (data) {
                        console.log(data);
                        notyService.success(data.message);
                    })
                    .error(function (error) {
                        console.log(error);
                        notyService.error(error.message);

                    });
                console.log("ASda");

            }
            console.log("ASda");
        }
    });
}());