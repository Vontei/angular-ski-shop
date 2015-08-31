
app.controller('itemsController', ['$scope','$http',
  function($scope, $http, skiFactory){

    $http.get('/data.json').then(function (data) {
      $scope.items = data.data
    })

    $scope.shoppingCart = []

    $scope.addToCart = function(){
      $scope.shoppingCart.push(this.item)
    }


  }
]);



app.controller('cartController', ['$scope', '$http',
  function ($scope, $http) {
  }
])
