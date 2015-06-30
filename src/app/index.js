'use strict';

angular.module('lista', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial','dragview'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('root', {
        url: '/',
        templateUrl: '',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
