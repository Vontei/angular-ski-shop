app.factory('skiFactory', function () {
  var cartTotal = 0;
  var newPrice = 0;
  return {
    shoppingCart: [],

    addToCart: function(item,qty){
      item.qty = qty
      this.shoppingCart.push(item)
      if(qty){
      cartTotal+= (item.price*qty);
      } else {
      cartTotal+=item.price;
      }
    },

    cartTotal: function(){
      if (this.shoppingCart ===[]) return 0;
      return cartTotal
    },

    removeItem: function(item){
      var newPrice=0
      // cartTotal -= (item.price);
      var i = this.shoppingCart.indexOf(item);
      this.shoppingCart.splice(i, 1);
      if(this.shoppingCart.length===0) cartTotal = 0;
      var resultsArr = this.shoppingCart.map(function (e) {
        return newPrice+= e.price;
      })
      cartTotal = newPrice
      return newPrice
    },

  }

})
