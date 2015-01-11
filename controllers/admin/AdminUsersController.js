(function () {
    angular.module('app')

    .controller('AdminUsersController',
    function ($scope, $location, $routeParams, adsModel, notyService, admin, userSession, jQueryService) {

        jQueryService.logUser('Users', false, false, "Ads Administrator - Users", true);

        var pageSize = 2,
            startPage = 1,
            status = $routeParams.status,
            townId = $routeParams.townId,
            categoryId = $routeParams.categoryId;

        //function getAllUserAds() {
        //    $scope.hasAds = true;
        //    var token = userSession.getToken();
        //    admin.getUserAds(token,
        //        {
        //            'pageSize': pageSize,
        //            'startPage': startPage,
        //            'status': status,
        //            'townId': townId,
        //            'categoryId': categoryId
        //        })
        //    .success(function (data) {

        //        $scope.ads = data.ads;
        //        $scope.numPages = data.numPages;
        //        $scope.numItems = data.numItems;

        //        $scope.maxSize = 5;  //setup for Pagination (ui.bootstrap.pagination)
        //        $scope.bigTotalItems = data.numPages * 10;  //setup for Pagination (ui.bootstrap.pagination)                

        //        if (data.ads.length == 0) {
        //            $scope.hasAds = false;
        //        }
        //    })
        //    .error(function (error) {
        //        console.log(error);
        //        notyService.error(error.message);
        //    });
        //}

        //$scope.bigCurrentPage = 1;  //setup for Pagination (ui.bootstrap.pagination)

        //$scope.setPage = function (pageNo) {  //setup for Pagination (ui.bootstrap.pagination)
        //    $scope.bigCurrentPage = pageNo;
        //};

        //$scope.pageChanged = function () {  //setup for Pagination (ui.bootstrap.pagination)            
        //    startPage = $scope.bigCurrentPage;
        //    getAllUserAds();

        //};

        //getAllUserAds();

        //$scope.deactivate = function ($event) {
        //    var id = $($event.target).data('id');
        //    var token = userSession.getToken();

        //    user.deactivateAd(id, token)
        //    .success(function (data) {
        //        notyService.information(data.message);
        //        console.log(data);
        //        getAllUserAds();

        //    })
        //    .error(function (error) {
        //        console.log(error);
        //        notyService.error(error.message);
        //    });



        //}

        //$scope.edit = function ($event) {
        //    var id = $($event.target).data('id');
        //    $location.path('/user/ads/edit/' + id).search('');
        //}

        //$scope.publishAgain = function ($event) {
        //    var id = $($event.target).data('id');
        //    var token = userSession.getToken();

        //    user.publishAgainAd(id, token)
        //    .success(function (data) {

        //        getAllUserAds();
        //        notyService.information(data.message);
        //        console.log(data);
        //    })
        //    .error(function (error) {
        //        console.log(error);
        //    });
        //}

        //$scope.delete = function ($event) {
        //    var id = $($event.target).data('id');
        //    $location.path('/user/ads/delete/' + id).search('');
        //}
    });
}());