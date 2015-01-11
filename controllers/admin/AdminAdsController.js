(function () {
    angular.module('app')

    .controller('AdminAdsController',
    function ($scope, $location, $routeParams, adsModel, notyService, admin, userSession, jQueryService) {

        jQueryService.logUser('Ads', true, true, "Ads Administrator - Ads", true);

        var pageSize = 4,
            startPage = 1,
            status = $routeParams.status,
            townId = $routeParams.townId,
            categoryId = $routeParams.categoryId;

        var token = userSession.getToken();

        function getAllAds() {
            $scope.hasAds = true;
            admin.getUserAds(token,
                {
                    'pageSize': pageSize,
                    'startPage': startPage,
                    'status': status,
                    'townId': townId,
                    'categoryId': categoryId
                })
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

        $scope.approve = function (ev) {
            var id = $(ev.currentTarget).data('id');
            admin.approve(id, token)
                .success(function (data) {
                    notyService.success(data.message);
                    getAllAds();
                })
                .error(function (error) {
                    notyService.success(error.message);
                });
        }

        $scope.edit = function (ev) {
            var id = $($event.target).data('id');
            $location.path('/user/ads/edit/' + id).search('');
        }

        $scope.reject = function (ev) {
            var id = $(ev.currentTarget).data('id');
            admin.reject(id, token)
                .success(function (data) {
                    notyService.success(data.message);
                    getAllAds();
                })
                .error(function (error) {
                    notyService.success(error.message);
                });

        }

        $scope.delete = function (ev) {
            var id = $(ev.currentTarget).data('id');
            $location.path('/user/ads/delete/' + id).search('');
        }

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
    });
}());