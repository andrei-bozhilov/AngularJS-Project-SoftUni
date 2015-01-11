(function () {
    angular.module('app')

    .directive('adminAdDirective', function () {
        return {
            templateUrl: "/templates/admin-ad-template.html",
            scope: 'false',
            controller: 'AdContoller'
        }
    });
}())