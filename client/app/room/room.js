'use strict';

angular.module('beatboxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('room', {
        url: '/room',
        templateUrl: 'app/room/room.html',
        controller: 'RoomCtrl'
      });
  });