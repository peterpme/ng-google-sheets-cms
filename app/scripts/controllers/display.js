'use strict';

angular.module('portsApp')
  .controller('DisplayCtrl', ['$scope', 'clientLoaderService',
    function ($scope, clientLoaderService) {
        $scope.results = [];
        $scope.httpStatus = 0;
        $scope.LoadRequest = clientLoaderService.loadClientList();
        clientLoaderService.loadClientList()
            .then(function(results){
                $scope.httpStatus = 200;
                $scope.results = results;
                console.log('###', results);
              });
  }]);