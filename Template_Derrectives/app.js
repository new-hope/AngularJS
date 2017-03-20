var app = angular.module("CalculateApp", []);



    app.controller("CalculateCtrl", function($scope){
        $scope.res = null;
        $scope.addClickButton = function() {
            $scope.res = $scope.number_1 + $scope.number_2;
        };

        $scope.subClickButton = function() {
            $scope.res = $scope.number_1 - $scope.number_2;
        };

        $scope.mulClickButton = function() {
            $scope.res = $scope.number_1 * $scope.number_2;
        };

        $scope.divClickButton = function() {
            if ($scope.number_2 != 0) {
                $scope.res = $scope.number_1 / $scope.number_2;
            }
            else {
                alert("Деление на ноль");
            }
        };
    });
