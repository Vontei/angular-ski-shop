var app = angular.module('skibay', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/items.html',
      controller: 'itemsController',
      contoller: 'cartController'

    })
    .when('/cart', {
      templateUrl: 'partials/cart.html',
      contoller: 'cartController',
      controller: 'itemsController'
    })

});
