angular.module('CreativeEuropeApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('app.public', {
      abstract: true,
      templateUrl: 'states/public/public.html',
      controller: ['$scope', function ($scope) {

      }]
    });
  }]);
