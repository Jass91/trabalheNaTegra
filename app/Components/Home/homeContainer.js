'use strict'

// simple variables
var books =
[
  {
    id: 1,
    title: "The Pragmatic Programmer: From Journeyman to Master",
    author: "Andrew Hunt & Dave Thomas",
    price: 40.00,
    quantity: 12
  },
  {
    id: 2,
    title: "The Mythical Man-Month: Essays on Software Engineering",
    author: "Frederick P. Brooks",
    price: 80.00,
    quantity: 1
  },
  {
    id: 3,
    title: "Expressões Regulares - Uma Abordagem Divertida",
    author: "Aurelio Marinho Jargas",
    price: 20.00,
    quantity: 13
  },
  {
    id: 4,
    title: "Domain Driven Design: Tackling Complexity in the Heart of Software",
    author: "Eric Evans",
    price: 120.00,
    quantity: 42
  },
  {
    id: 5,
    title: "Patterns of Enterprise Application Architecture",
    author: "Martin Fowler",
    price: 32.00,
    quantity: 42
  },
  {
    id: 6,
    title: "Epigrams in Programming",
    author: "Alan Perils",
    price: 31.00,
    quantity: 0
  },
  {
    id: 7,
    title: "Implementing Domain-Driven Design",
    author: "Vaughn Vernon",
    price: 31.00,
    quantity: 42
  },
  {
    id: 8,
    title: "Dive Into HTML5",
    author: "Mark Pilgrim",
    price: 22.00,
    quantity: 42
  },
  {
    id: 9,
    title: "Scalable Internet Architectures",
    author: "Theo Schlossnagle",
    price: 18.00,
    quantity: 4
  },
  {
    id: 10,
    title: "Refactoring: Improving the Design of Existing Code",
    author: "Martin Fowler",
    price: 33.00,
    quantity: 2
  },
  {
    id: 11,
    title: "Treinamento Em C",
    author: "Victorine Viviane Mizrahi",
    price: 42.00,
    quantity: 6
  },
  {
    id: 12,
    title: "Algoritmos: Teoria e Prática",
    author: "Thomas H. Cormen",
    price: 4.60,
    quantity: 1
  }
];

var cart = require('../Shared/Cart/cart');


// react components
var React = require('react');
var HomeComponent = require('./homeComponent');
var ListItemContainer = require('../Shared/List/listItemContainer');

var HomeContainer = React.createClass({

	getInitialState : function(){
		return {books: books};
	},

  render : function(){
    return(<HomeComponent books={this.toListItemArray()} />);
  },
 
  toListItemArray : function(){
    var self = this;
    var items = this.state.books.map(function(book, index){
      return (<ListItemContainer key={index} item={book} handleClick={self.addToCart}/>);
    });

    return items;
  },

  addToCart : function(book, quantity){
   
    // search for book inside the cart
    var result = cart.find(function(e){
      return e.id == book.id; 
    });
    
    // if not found, it`s a new book
    if(!result){
      result = {};
      result.id = book.id;
      result.title = book.title;
      result.author = book.author;
      result.price = book.price;
      result.quantity = 1;
      cart.push(result);

    // else, we add more of the same book
    }else{
      var index = cart.indexOf(result);
      cart[index].quantity += quantity;
    }
    
    // update book's quantity
  	this.updateBookQuantity(book, quantity);
  },

  updateBookQuantity : function(book, quantity){

    var bookIndex = books.indexOf(book);
    books[bookIndex].quantity -= quantity;

    this.setState({books: books});
  },

  componentWillMount : function(){

  }

});

module.exports = HomeContainer;
