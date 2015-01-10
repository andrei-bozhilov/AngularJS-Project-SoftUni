(function () {
    angular.module('app')

    .controller('UserController', function ($scope, $location, $routeParams, adsModel, notyService, userSession, jQueryService) {

        jQueryService.logUser('Home', true, false, "Ads - Home");

        $scope.username = userSession.getCurrentUser().username;
        $scope.user = userSession.getCurrentUser();



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

        $scope.showModal = function (ev) {
            var id = $(ev.currentTarget).data('id');
            var currentAd = {};

            console.log($(ev.currentTarget).data('id'));
            console.log($scope.ads);

            currentAd = ($scope.ads.filter(function (x) {
                return x.id == id;
            }))[0];

            $('#my-modal-header').text(currentAd.title);
            $('#my-modal-body').text(currentAd.text);
            $('#myModal').modal('show');
        };

        getAllAds();
    })
}());
