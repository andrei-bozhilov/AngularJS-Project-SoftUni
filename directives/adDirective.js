(function () {
    angular.module('app')    

    .directive('adDirective', function () {
        return {
            templateUrl: "/templates/ad-template.html",
            scope: 'false',
            controller: 'AdContoller'
        }
    });
}())