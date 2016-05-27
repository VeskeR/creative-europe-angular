angular.module('CreativeEuropeApp')
  .config(['$translateProvider', function($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: '/app/i18n/',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');
    // Uncomment on deploy. Need fix for russian, ukrainian languages
    // $translateProvider.useSanitizeValueStrategy('sanitize');
  }]);
