(function () {
    angular.module('app')

    .controller('MainController', function ($scope, $log, $routeParams, adsModel) {
        $('#right-side-menu').show();

        var pageSize = 2,
            startPage = 1,
            townId = $routeParams.townId,
            categoryId = $routeParams.categoryId;


        adsModel.getAll(null, pageSize, startPage, townId, categoryId)
        .success(function (data) {
            console.log(data);

            $scope.ads = data.ads;
            $scope.numPages = data.numPages;
            $scope.numItems = data.numItems;

            $scope.maxSize = 5;  //setup for Pagination (ui.bootstrap.pagination)
            $scope.bigTotalItems = data.numPages * 10;  //setup for Pagination (ui.bootstrap.pagination)
        })
        .error(function (error) {
            console.log(error);
        })
         .then(function () {
             setTimeout(function () {
                 $('body').removeClass("loading");
             }, 100);

         });

        $scope.bigCurrentPage = 1;  //setup for Pagination (ui.bootstrap.pagination)

        $scope.setPage = function (pageNo) {  //setup for Pagination (ui.bootstrap.pagination)
            $scope.bigCurrentPage = pageNo;
        };

        $scope.pageChanged = function () {  //setup for Pagination (ui.bootstrap.pagination)
            $log.log('Page changed to: ' + $scope.bigCurrentPage);
            startPage = $scope.bigCurrentPage;
            getAllAds();

        };




    });
}())