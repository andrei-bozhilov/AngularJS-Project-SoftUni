(function () {
    angular.module('app')

    .controller('PublishAdController',
        function ($scope, $location, $routeParams, adsModel, notyService, user,
            userSession, jQueryService, categoriesModel, townsModel) {
            jQueryService.logUser('Publish New Ad', false);

            $scope.adData = {
                townId: "",
                categoryId: ""
            };

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

            $scope.publishNewAd = function click() {
                if (!!$scope.adData.title && !!$scope.adData.text) {
                    console.log(!$scope.adData.title);

                    var token = userSession.getToken();

                    user.createNewAd(token, $scope.adData)
                        .success(function (data) {
                            notyService.information("Advertisement submitted for approval. Once approved, it will be published.");
                            console.log(data);
                            $scope.adData = {
                                townId: "",
                                categoryId: ""
                            };
                        })
                        .error(function (error) {
                            console.log(error);
                            notyService.error(error.message);
                        });
                }
            };


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
            }


        });
}());