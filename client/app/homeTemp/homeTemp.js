'use strict';

angular.module('beatboxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('homeTemp', {
        url: '/',
        templateUrl: 'app/homeTemp/homeTemp.html',
        controller: 'HomeTempCtrl'
      });
  });
