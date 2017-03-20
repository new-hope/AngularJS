var app = angular.module("CalcApp", []);



  app.controller("baseAddCtrl", function($scope) {
    $scope.add = function() {
      $scope.result = null;
      return $scope.result = $scope.num_1 + $scope.num_2;

    };
  });

  app.controller("derivedSubCtrl", function($scope) {
    $scope.sub = function() {
      return $scope.result = $scope.num_1 - $scope.num_2;
    };
  });

  app.controller("derivedMulCtrl", function($scope) {
    $scope.mul = function() {
      return $scope.result = $scope.num_1 * $scope.num_2;
    };
  });

  app.controller("derivedDivCtrl", function($scope) {
    $scope.div = function() {
      return $scope.result = $scope.num_1 / $scope.num_2;
    };
  });
