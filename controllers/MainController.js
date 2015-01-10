(function () {
    angular.module('app')

    .controller('MainController', function ($scope, $location, $routeParams, adsModel, notyService, userSession, jQueryService) {

        if (userSession.getCurrentUser()) {
            $location.path('/user/home');
        }

        $('#right-side-menu').show();
        var headerParent = $('#header').parent();
        headerParent.html('').addClass('modal-header text-center').append($('<h2>').attr('id', 'header').text('Ads-Home'));
        $('#left-side-menu #menu-panel ul')
           .html("")
           .append('<li class="active"><a href="#/">Home</a></li>')
        $('#user-ads-menu').hide();
        $('#login-register-menu').show();



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
                console.log(error);
                notyService.error(error.message);
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

        getAllAds();

    });
}())