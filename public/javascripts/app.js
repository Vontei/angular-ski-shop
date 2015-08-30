var app = angular.module('skibay', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/items.html',
      controller: 'itemsController'
    })
})
