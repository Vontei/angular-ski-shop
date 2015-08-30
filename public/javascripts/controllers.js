app.controller('itemsController', ['$scope','$http',
  function($scope, $http){
    console.log('hi')
    $http.get('/data.json').then(function (data) {
      console.log(data)
      $scope.items = data.data
    })

  }
]);
 
