angular.module('route', [])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state({
        url: '/in_theaters/:page',
        templateUrl: './view/in_theaters/in_theaters.html',
        name: 'in_theaters',
        controller: 'in_theatersCtrl'
      })
      .state({
        url: '/search/:page/:searchInfo',
        templateUrl: './view/search/search.html',
        name: 'search',
        controller: 'searchCtrl'
      })
      .state({
        url: '/comming_soon/:page',
        templateUrl: './view/comming_soon/comming_soon.html',
        name: 'comming_soon',
        controller: 'comming_soonCtrl'
      })
      .state({
        url: '/top/:page',
        templateUrl: './view/top250/top250.html',
        name: 'top',
        controller: 'topCtrl'
      })
    $urlRouterProvider.otherwise('/in_theaters/1');
    //配置angular白名单
    /*$sceDelegateProvider.resourceUrlWhitelist([
     // Allow same origin resource loads.
     'self',
     'https://'
     ]);*/
  }])