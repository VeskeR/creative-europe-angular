angular.module('CreativeEuropeApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('app.content', {
      abstract: true,
      templateUrl: 'states/content/content.html',
      controller: ['$scope', function ($scope) {
        $scope.currentPage = 1;
        $scope.pageCount = 1;

        $scope.setCurrentPage = function (page) {
          $scope.currentPage = page;
        };
        $scope.setPageCount = function (pageCount) {
          $scope.currentPage = 1;
          $scope.pageCount = pageCount;
        };
        $scope.nextPage = function () {
          $scope.currentPage = $scope.currentPage < $scope.pageCount ? $scope.currentPage + 1 : $scope.currentPage;
        };
        $scope.prevPage = function () {
          $scope.currentPage = $scope.currentPage > 1 ? $scope.currentPage - 1 : $scope.currentPage;
        };
      }]
    });
  }]);
