angular.module('CreativeEuropeApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('app.content.culture', {
      url: '/culture',
      templateUrl: 'states/content/culture/culture.html',
      controller: ['$scope', function ($scope) {

      }]
    });
  }]);
