var app = angular.module("TestApp", []);

app.controller("TestCtrl", function($scope) {

  $scope.questions = [{display: "I _____ to school every day.", value: "question_1"},
                      {display: "He often _____ this book.", value: "question_2"},
                      {display: "She never _____ English with me.", value: "question_3"},
                      {display: "I _____ understand this article.", value: "question_4"},
                      {display: "Where _____ you study?", value: "question_5"}];

  $scope.answers = [{display: [], value: ""},
                    {display: [{answ: "goes", val: false}, {answ: "go", val: true}, {answ: "went", val: false}, {answ: "am", val: false}], value: "question_1"},
                    {display: [{answ: "read", val: false}, {answ: "is read", val: false}, {answ: "reads", val: true}, {answ: "is reading", val: false}], value: "question_2"},
                    {display: [{answ: "speak", val: false}, {answ: "speaks", val: true}, {answ: "is speak", val: false}, {answ: "is speaking", val: false}], value: "question_3"},
                    {display: [{answ: "am not", val: false}, {answ: "is not", val: false}, {answ: "do not", val: true}, {answ: "not", val: false}], value: "question_4"},
                    {display: [{answ: "do", val: true}, {answ: "does", val: false}, {answ: "is", val: false}, {answ: "are", val: false}], value: "question_5"}];

  $scope.mode = $scope.answers[0];

  $scope.modeAnsw = {};

  var counter = 0;
  $scope.res = null;
  var result = 0;
  $scope.showRes = false;

  $scope.addAnswer = function () {
    counter++;
    $scope.answers.forEach(function(elem) {
      elem.display.forEach(function(element) {
        if (element.answ == $scope.modeAnsw.answ){
          if (element.val) {
            result++;
          }
        }
      });
    });

    $scope.modeAnsw = {};

    if (counter == 5) {
      $scope.showRes = !$scope.showRes;
      $scope.res = result;
      return $scope.res;
    }
  };

});
