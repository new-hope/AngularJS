var app = angular.module("daybookApp", []);
  app.controller("daybookCtrl", function($scope) {

    $scope.sortParam = 'date';
    $scope.limitArr = [];

    $scope.arr = [];
    var i = 1;

    $scope.addDaybook = function() {
      $scope.arr.push({description: $scope.desc, date: $scope.date});
      $scope.limitArr.push(i);
      $scope.limitValue = $scope.limitArr.length;
      i++;
    }



  })
