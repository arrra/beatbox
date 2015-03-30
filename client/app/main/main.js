'use strict';

angular.module('beatboxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/oldHome',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });
