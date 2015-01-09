(function () {
    angular.module('app')

    .directive('userAdDirective', function () {
        return {
            templateUrl: "/templates/user-ad-template.html",
            scope: 'false',
            controller: 'AdContoller'
        }
    });
}())