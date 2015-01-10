(function () {
    angular.module('app')

    .controller('UserAdEditController', function ($scope, $location, $routeParams, townsModel, categoriesModel, notyService, user, userSession, jQueryService) {


        jQueryService.logUser('My Ads', false, false, "Ads - Edit Ad");

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

        townsModel.getAll()
            .success(function (data) {
                $scope.towns = data;
            })
            .error(function (error) {
                console.log(error);
                notyService.error(error.message);
            });

        categoriesModel.getAll()
            .success(function (data) {
                $scope.categories = data;
            })
            .error(function (error) {
                console.log(error);
                notyService.error(error.message);
            });

        $scope.fileSelected = function (fileInputField) {
            $scope.adData.fileName = fileInputField.value;
            delete $scope.adData.imageDataUrl;
            var file = fileInputField.files[0];
            if (file.type.match(/image\/.*/)) {
                var reader = new FileReader();
                reader.onload = function () {
                    $scope.adData.imageDataUrl = reader.result;
                    $scope.$apply();
                };
                reader.readAsDataURL(file);
            } else {
                delete $scope.adData.imageDataUrl;
                $scope.$apply();
                notyService.error("File your are trying to upload isn't a picture!");
            }
            $scope.adData.changeImage = true;
        }

        $scope.deleteImage = function () {
            delete $scope.adData.imageDataUrl;
            delete $scope.adData.fileName;
            $scope.adData.changeImage = true;
        };

        $scope.editUserAd = function () {
            var data = JSON.parse(JSON.stringify($scope.adData)); // clone object so can delete property without change #scope.adData

            if (!$scope.adData.changeImage) {
                delete data.imageDataUrl;
            }

            user.editUserAd(adId, token, data)
            .success(function (data) {
                notyService.information(data.message);
                notyService.information("Advertisement edited. Don't forget to submit it for publishing.");
                $location.path('/user/ads');

            })
            .error(function (error) {
                console.log(error);
                notyService.error(error.message);
            });
        }

    });
}());