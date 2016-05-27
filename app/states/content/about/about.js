angular.module('CreativeEuropeApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('app.content.about', {
      url: '/about',
      templateUrl: 'states/content/about/about.html',
      controller: ['$scope', function ($scope) {

      }]
    });
  }]);
