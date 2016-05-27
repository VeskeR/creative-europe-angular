angular.module('CreativeEuropeApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('app.content.homepage', {
      url: '/homepage',
      templateUrl: 'states/content/homepage/homepage.html',
      controller: ['$scope', function ($scope) {

      }]
    });
  }]);
