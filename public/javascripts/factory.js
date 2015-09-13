app.factory('skiFactory', function () {
  var cartTotal = 0;
  return {
    shoppingCart: [],

    addToCart: function(item,qty){
      item.qty = qty
      console.log('qty', item.qty)
      this.shoppingCart.push(item)
      if(qty){
      cartTotal+= (item.price*qty);
      } else {
      cartTotal+=item.price;
      }
    },

    cartTotal: function(){
      console.log('this', cartTotal)
      return cartTotal
    },

    removeItem: function(item){
      var newPrice=0
      cartTotal -= (item.price);
      var i = this.shoppingCart.indexOf(item);
      this.shoppingCart.splice(i, 1);
      if(this.shoppingCart.length===0) cartTotal = 0;
      this.shoppingCart.forEach(function (e) {
        newPrice+= e.price;
      })
      cartTotal=newPrice
      console.log('end Total',cartTotal-=item.price)
      console.log('newPrice', newPrice)
      return newPrice
    },

  }

})
