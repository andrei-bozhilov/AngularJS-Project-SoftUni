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
            templateUrl: 'views/user-ad-delete.html',
            controller: 'UserAdDeleteController'
        })

        .when('/user/ads/edit/:id', {
            templateUrl: 'views/user-ad-edit.html',
            controller: 'UserAdEditController'
        })

          .when('/admin/ads/townId/:townId?&categoryId/:categoryId?&status/:statusId?', {
              templateUrl: 'views/admin/admin-ads-view.html',
              controller: 'AdminAdsController'
          })

          .when('/admin/ads', {
              templateUrl: 'views/admin/admin-ads-view.html',
              controller: 'AdminAdsController'
          })

          .when('/admin/towns', {
              templateUrl: 'views/admin/admin-towns-view.html',
              controller: 'AdminTownsController'
          })

          .when('/admin/categories', {
              templateUrl: 'views/admin/admin-categories-view.html',
              controller: 'AdminCategoriesController'
          })

          .when('/admin/users', {
              templateUrl: 'views/admin/admin-users-view.html',
              controller: 'AdminUsersController'
          })

           .when('/admin/logout', {
               templateUrl: 'views/login-view.html',
               controller: 'LogoutController'
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
        $('#header').parent().attr('style', ''); //  after logout admin change color;
    })

    .run(function ($rootScope, $location, userSession) {
        $rootScope.$on('$locationChangeStart', function (event) {
            if ($location.path().indexOf("/user/") != -1 && !userSession.getCurrentUser()) {
                // Authorization check: anonymous site visitors cannot access user routes
                $location.path("/");
            }

            if (userSession.isAdmin() && $location.path().indexOf("/user/") != -1) {
                $location.path('/admin/ads')
            }

            if (userSession.isAdmin() && $location.path() == '/') {
                $location.path('/admin/ads')
            }

            if ($location.path() == '/user/ads/edit') {
                $location.path('/user/ads');
            }

            if ($location.path() == '/user/ads/delete') {
                $location.path('/user/ads');
            }
        });

    });
}());


