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

         .when('/user/ads', {
             templateUrl: 'views/user-ads-view.html',
             controller: 'UserAdsController'
         })

        .when('user/ads/status/:statusId?', {
            templateUrl: 'views/publish-ad-view.html',
            controller: 'UserAdsController'
        })

        .when('/user/ads/publish', {
            templateUrl: 'views/publish-ad-view.html',
            controller: 'PublishAdController'
        })

        .when('/user/profile', {
            templateUrl: 'views/user-profile-view.html',
            controller: 'UserProfileController'
        })

        .when('/user/ads/delete/:id', {
            templateUrl: 'views/user-ad-edit.html',
            controller: 'UserAdDeleteController'
        })

        .when('/user/ads/edit/:id', {
            templateUrl: 'views/user-ad-edit.html',
            controller: 'UserAdEditController'
        })

         // .otherwise({ redirectTo: '/login' });
     }])

    .controller('AdContoller', function ($scope, jQueryService) {
        $(window).resize(jQueryService.resizeImgHeight);
        $(window).ready(jQueryService.resizeImgHeight);
    })

    .controller('LogoutController', function ($scope, $location, userSession, notyService) {
        userSession.logout();
        $location.path('/');
        notyService.success("You logout successfully.");

    })

    .run(function ($rootScope, $location, userSession) {
        $rootScope.$on('$locationChangeStart', function (event) {
            if ($location.path().indexOf("/user/") != -1 && !userSession.getCurrentUser()) {
                // Authorization check: anonymous site visitors cannot access user routes
                $location.path("/");
            }
        });

    });
}());


