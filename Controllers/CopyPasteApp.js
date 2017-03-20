var app = angular.module("CopyPasteApp", []);

  var res = "";

  app.controller("CopyCtrl", function($scope) {
    $scope.getCopy = function() {
      res = $scope.copy;
      // $scope.copy = null; с этой строчкой делается команда "вырезать".
    };
  });

  app.controller("PasteCtrl", function($scope) {
    $scope.getPaste = function() {
      $scope.paste = res;
      return $scop.paste;
    };
  });
