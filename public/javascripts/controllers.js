app.controller('navController', ['$scope', 'skiFactory',
  function($scope, skiFactory){
    //get shoppingCart count for Nav Bar
    $scope.cartCount = skiFactory.shoppingCart;
  }
])



app.controller('itemsController', ['$scope','$http','skiFactory',
  function($scope, $http, skiFactory){
    //get data
    $http.get('/data.json').then(function (data) {
      $scope.items = data.data
    })

    //add stuff to the cart
    $scope.addToCart = function(){
      // skiFactory.cartTotal += this.item.price
      console.log(this.item.price)
      skiFactory.addToCart(this.item)
      console.log(skiFactory.shoppingCart)
    }


  }
]);



app.controller('cartController', ['$scope', '$http','skiFactory',
  function ($scope, $http, skiFactory) {

    //cart total amount
    $scope.cartTotal = skiFactory.cartTotal()
    //shopping cart object
    $scope.shoppingCart = skiFactory.shoppingCart;

    //toggle edit
    $scope.toggleForm = function (){
      $scope.showingForm = !$scope.showingForm;
    }

    //remove item from cart
    $scope.removeItem = function(){

      skiFactory.removeItem(this.item)
      $scope.cartTotal= skiFactory.cartTotal()
    }
  }
]);
