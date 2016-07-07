'use strict'

// data Source
var dataSource = require('../Shared/Data/dataSource');


// react components
var React = require('react');
var ShopcartComponent = require('./shopcartComponent');
var ListItemContainer = require('../Shared/List/listItemContainer');

var ShopcartContainer = React.createClass({

  getInitialState : function(){
    return(
      {
        cart: dataSource.cart,
        price: 0,
        count: 0
      }
    );
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
  },

  toListItemArray : function(){
    debugger;
    if(this.state.cart.length == 0){
      return [];
    }

    var self = this;
    var items = this.state.cart.map(function(book, index){
      return(
        <ListItemContainer
          key={index}
          item={book}
          handleClick={self.removeFromCart}
          btnTitle="Remove from cart"
        />
      );
    });

    return items;
  },

  removeFromCart : function(book, quantity){
    
    dataSource.updateBookCartQuantity(book, -quantity);

    // put book back on the store
    dataSource.updateBookQuantity(book, quantity);

    this.setState({cart: dataSource.cart});
  },

  render : function(){
    return(
      <ShopcartComponent
        cart = {this.toListItemArray()}
        price = {this.state.price}
        count = {this.state.count}
      />
    );
  },

});

module.exports = ShopcartContainer;
