'use strict';

angular.module('portsApp', [
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'DisplayCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


  (function () {
    angular.module('angular-google-docs', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'DisplayCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    });
  }());