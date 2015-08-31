app.factory('skiFactory', function () {

  return {


    shoppingCart: [],

    addToCart: function(item){
      this.shoppingCart.push(item)
    },

    cartTotal: 0,


  }


})
