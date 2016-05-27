angular.module('CreativeEuropeApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('app.public.homepage', {
      url: '/homepage',
      templateUrl: 'states/public/homepage/homepage.html',
      controller: [function () {

      }]
    });
  }]);
