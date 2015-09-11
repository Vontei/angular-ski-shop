app.controller('navController', ['$scope', 'skiFactory',
  function($scope, skiFactory){
    //get shoppingCart count for Nav Bar
    $scope.cartCount = skiFactory.shoppingCart;
  }
])



app.controller('itemsController', ['$scope','$http','skiFactory',
  function($scope, $http, skiFactory){
    $http.get('/data.json').then(function (data) {
      $scope.items = data.data
    })

    $scope.addToCart = function(){
      this.item.qty = this.qty
      skiFactory.addToCart(this.item, this.qty)
    }

  }
]);



app.controller('cartController', ['$scope', '$http','skiFactory',
  function ($scope, $http, skiFactory) {
    $scope.cartTotal = skiFactory.cartTotal()
    $scope.shoppingCart = skiFactory.shoppingCart;
    console.log($scope.shoppingCart)
    $scope.toggleForm = function (){
      $scope.showingForm = !$scope.showingForm;
    }

    $scope.removeItem = function(){
      skiFactory.removeItem(this.item)
      console.log(skiFactory.cartTotal())
      $scope.cartTotal=skiFactory.cartTotal()

    }


    $scope.finalAmount = this.qty;
    $scope.updateCart = function(){
      console.log(this.finalAmount)
      var newTotal = this.finalAmount * this.item.price
      $scope.cartTotal= skiFactory.cartTotal()
      skiFactory.updateCart(newTotal)

    }


  }
]);
