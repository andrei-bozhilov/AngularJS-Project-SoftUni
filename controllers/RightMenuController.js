(function () {
    angular.module('app')

    .controller('RigtMenuController', function ($scope, $location, $routeParams, townsModel, categoriesModel, jQueryService, notyService) {
        function attachEvents() {
            //event for changing url for filters
            $('#right-side-menu').on('click', 'li', function (ev) {
                var idObj = $(ev.target).data();

                for (var prop in idObj) {
                    $routeParams[prop] = idObj[prop];
                }

                $location.search($routeParams);
                $scope.$apply()
            });

            jQueryService.addActiveClassToLi('town-panel');
            jQueryService.addActiveClassToLi('category-panel');
        };

        townsModel.getAll()
        .success(function (data) {
            $scope.towns = data;
        })
        .error(function (error) {
            console.log(error);
            notyService.error(error.message);
        })

        categoriesModel.getAll()
        .success(function (data) {
            $scope.categories = data;
        })
        .error(function (error) {
            console.log(error);
            notyService.error(error.message);
        })

        attachEvents();

    });
}());
