var cart = require('../Shared/Cart/cart');

// react components
var React = require('react');
var ShopcartComponent = require('./shopcartComponent');
var CartItemContainer = require('../Shared/List/cartItemContainer');

var ShopcartContainer = React.createClass({
  
  getInitialState : function(){
  	return ({cart: cart});
  },

  render : function(){
    console.log(cart);
    return(
    	<div>
    		<div>
    			<span>Items: X</span> 
    			<span> Valor: Y</span>
    		</div>
    		<ShopcartComponent cart = {this.toCartItemArray()}/>
    	</div>
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
  }

});

module.exports = ShopcartContainer;
