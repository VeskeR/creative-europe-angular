angular.module('CreativeEuropeApp')
  .config(['$urlRouterProvider', function($urlRouterProvider) {
    $urlRouterProvider
      .when('', '/')
      .otherwise('/homepage');
  }]);
