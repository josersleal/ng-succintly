'use strict';
function myController($scope) {

    $scope.visible = true;
    $scope.toggle = function ( ) {
      $scope.visible=!$scope.visible;
    };
}
