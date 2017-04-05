angular.module("notebookApp", [])
.constant("url", "http://localhost:2403/items/")
.controller("notebookCtrl", function($scope, $http, url) {

  $scope.currentView = "note";

  // функция для получения данных с помощью GET-запроса по адресу url
  $scope.refresh = function() {
      $http.get(url).success(function(data){
          $scope.items = data;
    });
  }

  // функция для создания новой записи и отправка POST-запроса на сервер
  $scope.createNote = function (item) {
      $http.({
          url: url + item.id,
          method: 'POST',
          data: item
      }).success(function (item) {
          $scope.items.push(item);
          $scope.currentView = "note";
      });
  }

  // функция для удаления записи на сервере
  $scope.deleteNote = function (item) {
      $http({
          method: "DELETE",
          url: url + item.id
      }).success(function () {
          $scope.items.splice($scope.items.indexOf(item), 1);
      });
  }

  // функция для обновления записи на сервере
  $scope.updateNote = function (item) {
      $http({
          url: url + item.id,
          method: "PUT",
          data: item
      }).success(function (modItem) {
          for (var i = 0; i < $scope.items.length; i++) {
              if ($scope.items[i].id == modItem.id) {
                  $scope.items[i] = modItem;
                  break;
              }
          }
          $scope.currentView = "note";
      });
  }

  // функция для редеактирования записи или создания новой
  $scope.editCreate = function (item) {
      $scope.currentItem = item ? angular.copy(item) : {};
      $scope.currentView = "edit";
  }

  // функция для сохранения изменений
  $scope.saveEdit = function (item) {
      if (angular.isDefined(item.id)) {
          $scope.updateNote(item);
      } else {
          $scope.createNote(item);
      }
  }

  // функция для отмены изменений
  $scope.cancelEdit = function () {
      $scope.currentItem = {};
      $scope.currentView = "note";
  }

  $scope.refresh();



});
