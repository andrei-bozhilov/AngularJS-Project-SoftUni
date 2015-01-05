(function () {
    angular.module('app', [
          'ngRoute',
          'ui.bootstrap',
          'ngAnimate'
    ])

     .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
         $routeProvider

         .when('/', {
             templateUrl: 'views/main-view.html',
             controller: 'MainController'
         })

         .when('/townId/:townId?&categoryId/:categoryId?', {
             templateUrl: 'views/main-view.html',
             controller: 'MainController'
         })

         .when('/login', {
             templateUrl: 'views/login-view.html',
             controller: 'LoginController'
         })

        .when('/user/logout', {
            templateUrl: 'views/login-view.html',
            controller: 'LogoutController'
        })

         .when('/register', {
             templateUrl: 'views/register-view.html',
             controller: 'RegisterController'
         })

        .when('/user/home/', {
            templateUrl: 'views/main-view.html',
            controller: 'UserController'
        })

        .when('/user/home/townId/:townId?&categoryId/:categoryId?', {
            templateUrl: 'views/main-view.html',
            controller: 'UserController'
        })

         // .otherwise({ redirectTo: '/login' });
     }])

    .controller('SetupController', function (jQueryService) {
        $(window).resize(jQueryService.resizeImgHeight);

        $scope.$on('$viewContentLoaded', function () {
            jQueryService.resizeImgHeight();
        });
    })

    .controller('LogoutController', function ($scope, $location, userSession) {
        userSession.logout();
        $location.path('/');
       
    })

    //.run(function ($rootScope, $location, AuthenticationService) {

    //    // enumerate routes that don't need authentication
    //    var routesThatDontRequireAuth = ['/login'];

    //    // check if current location matches route  
    //    var routeClean = function (route) {
    //        return _.find(routesThatDontRequireAuth,
    //          function (noAuthRoute) {
    //              return _.str.startsWith(route, noAuthRoute);
    //          });
    //    };

    //    $rootScope.$on('$stateChangeStart', function (ev, to, toParams, from, fromParams) {
    //        // if route requires auth and user is not logged in
    //        if (!routeClean($location.url()) && !AuthenticationService.isLoggedIn()) {
    //            // redirect back to login
    //            $location.path('/login');
    //        }
    //    });
    //});
}());


