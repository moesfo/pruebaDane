angular.module('Dane', [])
.controller('Formulario', ['$scope', '$http',  function($scope,$http) {

$scope.user = {
  tipoDoc: null
};

$scope.patternText = /^[a-zA-Z]*$/;
$scope.patternNum = /^[0-9]*$/;   

$scope.enviar = function(){
    $http.post('ws.php', $scope.user)
      .success(function(data) {
        $scope.user = {};
        $scope.msj = data;
        console.log(data);

      })
      .error(function(data) {
        console.log('Error:' + data);
      });
  };

$scope.reset = function(form) {
  $scope.user = {};
  if (form) {
    form.$setPristine();
    form.$setUntouched();
  }
};

$scope.reset();

}]);