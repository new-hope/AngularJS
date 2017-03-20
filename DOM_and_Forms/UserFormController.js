var app = angular.module("UserFormApp", []);
  app.controller("UserFormAppCtrl", function($scope) {

    $scope.getError = function (error) {
        if (angular.isDefined(error)) {
            if (error.required) {
                return "Поле не должно быть пустым";
            }
            else if (error.email) {
                return "Введите правильный email";
            }

        }
    };

    $scope.mode = false;

    $scope.passError = function () {
      if ($scope.newUser.password != $scope.newUser.con_password)
        return "Пароли должны совпадать"
    }

    $scope.showAlert = function (User, Form) {
      if (Form.$valid) {
        alert(User.firstName + ", поздравляю, Вы зарегистрированы.");
      }
    };
  });
