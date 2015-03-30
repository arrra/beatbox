'use strict';

angular.module('beatboxApp')
  .controller('RoomCtrl', function ($scope,$location, $http, Auth, socket) {
    $scope.isLoggedIn = Auth.isLoggedIn;

    if($scope.isLoggedIn()){
      $http.get('/api/rooms').success(function(createRoom) {
        $scope.createRoom = createRoom;
        console.log(createRoom);
        socket.syncUpdates('room', $scope.createRoom);
      });

      $scope.addRoom = function() {
        if($scope.newRoom === '') {
          return;
        }
        $http.post('/api/rooms', { name: $scope.newRoom });
        $scope.newRoom = '';

      };

      $scope.joinRoom = function(room) {
        $http.get('/api/rooms/' + room._id);
      };

      $scope.deleteRoom = function(room) {
        $http.delete('/api/rooms/' + room._id);
        console.log(room,"hi");
      };

      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('room');
      });

    } else {
      $location.path('/login');
    }

  });
