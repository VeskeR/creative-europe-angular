angular.module('CreativeEuropeApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('app', {
      abstract: true,
      templateUrl: 'states/app.html',
      controller: ['$scope', '$rootScope', function ($scope, $rootScope) {

      }]
    });
  }]);
