var cart = require('../Shared/Cart/cart');

// react components
var React = require('react');
var ShopcartComponent = require('./shopcartComponent');
var CartItemContainer = require('../Shared/List/cartItemContainer');

var ShopcartContainer = React.createClass({
  
  getInitialState : function(){
  	return (
      {
        cart: cart,
        price: 0,
        count: 0
      }
    );
  },

  render : function(){
    console.log(cart);
    return(
    		<ShopcartComponent
          cart = {this.toCartItemArray()}
          price = {this.state.price}
          count = {this.state.count}
        />
    );
  },

  toCartItemArray : function(){
    var self = this;
    var items = this.state.cart.map(function(book, index){
      return (<CartItemContainer key={index} item={book} handleClick={self.removeFromCart}/>);
    });

    return items;
  },

  removeFromCart : function(){
    console.log("REMOVER");
  },

  componentWillMount(){
    var price = this.getTotalPrice();
    var count = this.getTotalCount();
    this.setState({price: price, count: count});
  },

  getTotalPrice : function(){
    var partialSum = 0;
    this.state.cart.forEach(function(e){
      partialSum += (e.quantity * e.price);
    });

   return partialSum;
  },

  getTotalCount : function(){

    var count = 0;
    this.state.cart.forEach(function(e){
      count += e.quantity;
    });

   return count;
  }

});

module.exports = ShopcartContainer;
