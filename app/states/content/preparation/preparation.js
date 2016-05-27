angular.module('CreativeEuropeApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('app.content.preparation', {
      url: '/preparation',
      templateUrl: 'states/content/preparation/preparation.html',
      controller: ['$scope', function ($scope) {
        $scope.setPageCount(3);
      }]
    });
  }]);
