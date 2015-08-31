
app.controller('itemsController', ['$scope','$http','skiFactory',
  function($scope, $http, skiFactory){
    //get data
    $http.get('/data.json').then(function (data) {
      $scope.items = data.data
    })

    //add stuff to the cart
    $scope.addToCart = function(){
      console.log(this.item)
      skiFactory.addToCart(this.item)
      console.log(skiFactory.shoppingCart)
    }


  }
]);



app.controller('cartController', ['$scope', '$http','skiFactory',
  function ($scope, $http, skiFactory) {
    $scope.total = 100;
    $scope.shoppingCart = skiFactory.shoppingCart
    $scope.toggleForm = function () {
      $scope.showingForm = !$scope.showingForm;
    }

    $scope.removeItem = function(){
      var i = skiFactory.shoppingCart.indexOf(this.item);
      skiFactory.shoppingCart.splice(i, 1);
    }

  }
]);
