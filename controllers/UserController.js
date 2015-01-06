(function () {
    angular.module('app')

    .controller('UserController', function ($scope, $location, $routeParams, adsModel, notyService, userSession, jQueryService) {

        if (!userSession.getCurrentUser()) {
            $location.path('/login');
        }

        $scope.username = userSession.getCurrentUser().username;

        $('#right-side-menu').show();
        $('#header').text('Ads-Home').parent()
            .append($('<a>').text('Logout').addClass('pull-right logout-li').attr('href', '#/user/logout'))
            .append($('<span>').text($scope.username).addClass('user-span pull-right'));

        $('#left-side-menu ul')
            .html("")
            .append('<li class="active"><a href="#/user/home/">Home</a></li>')
            .append('<li><a href="#/user/ads">My Ads</a></li>')
            .append('<li><a href="#/user/ads/publish">Publish New Ad</a></li>')
            .append('<li><a href="#/user/profile">Edit Profile</a></li>');

        jQueryService.addActiveClassToLi('menu-panel');
        $scope.user = userSession.getCurrentUser();
        $('#login-register-menu').hide();

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

        getAllAds();
    })
}());
