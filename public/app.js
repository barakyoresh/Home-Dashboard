var app = angular.module('Dashboard', ['ngMaterial'])

app.controller('LoginCtrl', function($scope, $http){

  $scope.login = function () {
    console.log($scope.username)
    console.log($scope.password)
    $http.post('/login',
        {username: $scope.username,
         password: $scope.password}
       ).then(function () {
         console.log("what")
       }, function () {
         console.log("am i doing")
       });
  };
});
