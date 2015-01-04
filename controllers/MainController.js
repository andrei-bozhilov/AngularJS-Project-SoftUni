(function () {
    angular.module('app')

    .controller('MainController', function ($scope, $location, $routeParams, adsModel, notyService, userSession) {

        if (userSession.getCurrentUser()) {
            $location.path('/user/home');
        }

        $('#right-side-menu').show();
        $('#header').text('Ads-Home');

        var pageSize = 4,
            startPage = 1,
            townId = $routeParams.townId,
            categoryId = $routeParams.categoryId;

        function getAllAds() {
            $scope.hasAds = true;
            adsModel.getAll(null, pageSize, startPage, townId, categoryId)
            .success(function (data) {
                $scope.ads = data.ads;
                $scope.numPages = data.numPages;
                $scope.numItems = data.numItems;

                $scope.maxSize = 5;  //setup for Pagination (ui.bootstrap.pagination)
                $scope.bigTotalItems = data.numPages * 10;  //setup for Pagination (ui.bootstrap.pagination)

                if (data.ads.length == 0) {
                    $scope.hasAds = false;
                }
            })
            .error(function (error) {
                notyService.error(error.error_description);
            });

        }
        $scope.bigCurrentPage = 1;  //setup for Pagination (ui.bootstrap.pagination)

        $scope.setPage = function (pageNo) {  //setup for Pagination (ui.bootstrap.pagination)
            $scope.bigCurrentPage = pageNo;
        };

        $scope.pageChanged = function () {  //setup for Pagination (ui.bootstrap.pagination)            
            startPage = $scope.bigCurrentPage;
            getAllAds();

        };



        function resizeImgHeight() {
            var imgWidth = $('#view img').width();
            if (imgWidth > 300) {
                $('#view img').width(imgWidth / 2)
                $('#view img').height(imgWidth / 2);
            } else {
                $('#view img').removeAttr('style');
                $('#view img').height(imgWidth);
            }
        };

        $(window).resize(resizeImgHeight);

        $scope.$on('$viewContentLoaded', function () {
            resizeImgHeight();
            console.log("asdsd");

        });

        getAllAds();

    });
}())