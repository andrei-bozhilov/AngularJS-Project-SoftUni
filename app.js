
(function () {
    angular.module('app', [
          'ngRoute',
          'ui.bootstrap',
    ])

     .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
         $routeProvider

         .when('/', {
             templateUrl: 'views/main.html',
             controller: 'MainController'
         })

    

         .otherwise({ redirectTo: '/login' });
     }])
}())