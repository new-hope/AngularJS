var app = angular.module("indexApp", []);

  app.controller("indexCtrl", function($scope) {
    $scope.tasksFolder = [
      {name: "Introduction_in_AngularJS", tasks_url: [
          "Introduction_in_AngularJS/Task_1.html",
          "Introduction_in_AngularJS/Task_2.html",
          "Introduction_in_AngularJS/Test.html",
          "Introduction_in_AngularJS/CalculateApp.html"]},
      {name: "Template_Derectives", tasks_url: [
          "Template_Derectives/Test.html",
          "Template_Derectives/CalculateApp.html"
      ]},
      {name: "DOM_and_Forms", tasks_url: ["DOM_and_Forms/UserForm.html"]},
      {name: "Controllers", tasks_url: [
          "Controllers/Calc.html",
          "Controllers/CopyPasteApp.html"
      ]},
      {name: "Filters", tasks_url: [
          "Filters/Filter_1.html",
          "Filters/MyFilter.html",
          "Filters/Daybook.html"
      ]}
    ];

    $scope.selected = [];
    for (var i = 0; i < $scope.tasksFolder.length; i++) {
      $scope.selected[i] = false;
    }

  })
