app.factory('skiFactory', function () {

  var cartTotal = 0;


  return {


    shoppingCart: [],

    addToCart: function(item){
      this.shoppingCart.push(item)
      cartTotal+= item.price;
    },

    cartTotal: function(){
      console.log('this', cartTotal)
      return cartTotal
    },

    removeItem: function(item){
      cartTotal-= item.price;
      var i = this.shoppingCart.indexOf(item);
      this.shoppingCart.splice(i, 1);
    }


  }


})
