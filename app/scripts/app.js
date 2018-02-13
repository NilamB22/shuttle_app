'use strict';

/**
 * @ngdoc overview
 * @name shutleApp
 * @description
 * # shutleApp
 *
 * Main module of the application.
 */
// angular
//   .module('shutleApp', [ 'ngRoute'])
//   .config(function ($routeProvider) {
//     $routeProvider
//       .when('/login', {
//       templateUrl: 'views/login.html',
//       controller: 'LoginCtrl',
//       controllerAs: 'main'
//     })
//       .when('/main', {
//         templateUrl: 'views/main.html',
//         controller: 'MainCtrl',
//         controllerAs: 'main'
//       })
//       .when('/about', {
//         templateUrl: 'views/about.html',
//         controller: 'AboutCtrl',
//         controllerAs: 'about'
//       })
//       .when('/book', {
//         templateUrl: 'views/book_shuttle.html',
//         controller: 'BookShuttleCtrl',
//         controllerAs: 'main'
//       })
//       .otherwise({
//         redirectTo: '/book'
//       });
//   });

var app = angular.module('shutleApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/login');

  $stateProvider

  // HOME STATES AND NESTED VIEWS ========================================
    .state('book', {
      url: '/book',
      templateUrl: 'views/book_shuttle.html',
      controller:'BookShuttleCtrl'
    })

    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller:'LoginCtrl'
    })
    .state('show', {
    url: '/show',
      templateUrl: 'views/showdetails.html',
    controller:'ShowdetailsCtrl',
      params: {
      'data':''
      }
  })
  .state('logout', {
    url: '/logout',
    controller:'LogoutCtrl'
  });

});

