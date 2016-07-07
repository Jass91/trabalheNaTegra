'use strict'

// data source
var dataSource = require('../Shared/Data/dataSource');

// react components
var React = require('react');
var HomeComponent = require('./homeComponent');
var ListItemContainer = require('../Shared/List/listItemContainer');

var HomeContainer = React.createClass({

	getInitialState : function(){
		return {books: dataSource.books};
	},

  render : function(){
    return(<HomeComponent books={this.toListItemArray()} />);
  },
 
  toListItemArray : function(){
    var self = this;
    var items = this.state.books.map(function(book, index){
      return (
        <ListItemContainer
          key={index}
          item={book}
          handleClick={self.addToCart}
          btnTitle="Add to cart"
        />
      );

    });

    return items;
  },

  addToCart : function(book, quantity){

    // search book in the cart
    var {bookCart, index} = dataSource.getBookFromCart(book.id);
    
    // if not found, it`s a new book
    if(!bookCart){
      bookCart = {};
      bookCart.id = book.id;
      bookCart.title = book.title;
      bookCart.author = book.author;
      bookCart.price = book.price;
      bookCart.quantity = quantity;

      // add this new book
      dataSource.cart.push(bookCart);

    // else, we are adding more of the same book
    }else{
      dataSource.updateBookCartQuantity(bookCart, quantity)
    }
    
    // update book's quantity 
  	dataSource.updateBookQuantity(book, -quantity);

    // update our ui based on the new state
    this.setState({books: dataSource.books});
  }

});

module.exports = HomeContainer;
