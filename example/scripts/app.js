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