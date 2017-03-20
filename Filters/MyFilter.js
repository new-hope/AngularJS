var app = angular.module("filterApp", []);
  app.controller("filterCtrl", function($scope) {
    $scope.inputArr = [];
    $scope.show = false;
    $scope.sorte = function() {
      $scope.input.split(" ").forEach(function(el) {
        $scope.inputArr.push(+el);
      });
      $scope.show = !$scope.show;
    }
    $scope.clear = function () {
      $scope.inputArr = [];
      $scope.input = "";
      $scope.show = !$scope.show;
    }

  })

  app.filter("newFilter", function () {
    return function (arr) {
      arr.sort(function (a, b) {
        return a - b;
      });
      var evenArr = arr.filter(function (elem) {
        return elem % 2 == 0;
      });
      var oddArr = arr.filter(function (elem) {
        return elem % 2 != 0;
      })

      return evenArr.concat(oddArr);



    }
  })
