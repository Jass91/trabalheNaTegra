'use strict'

const dataSource = {
	cart: [],
	books: [
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
	  }]
};

function funcUpdateBookQuantity(book, quantity){
  var bookToUpdate = this.books.find(function(e){
  	return e.id = book.id;
  });

  var bookIndex = this.books.indexOf(bookToUpdate);
  this.books[bookIndex].quantity += quantity;

};

function funcUpdateBookCartQuantity(book, quantity){
	
  var {bookCart, index} = this.getBookFromCart(book.id);
 
  // if we need to remove all these books from cart
	if(quantity < 0 && bookCart.quantity == Math.abs(quantity)){
	 	this.cart.splice(index, 1);
	 	index = -1;
	}
	
	// if we just need to add or remove this quantity
	if(index >= 0){
		this.cart[index].quantity += quantity;
	}

 };

function funcGetBookFromCart(id){
	var book = this.cart.find(function(e){
      return e.id == id; 
  });

	var index = this.cart.indexOf(book);

  return {bookCart: book, index: index};
};

function funcPutBookBackToTheStore(book, quantity){

  bookOnStore = this.books.find(function(e){
  	return book.id == e.id;
  });

  this.updateBookQuantity(bookOnStore, quantity);};

// faz o bind
dataSource.updateBookQuantity = funcUpdateBookQuantity.bind(dataSource);
dataSource.updateBookCartQuantity = funcUpdateBookCartQuantity.bind(dataSource);
dataSource.getBookFromCart = funcGetBookFromCart.bind(dataSource);
dataSource.putBackBookToTheStore = funcPutBookBackToTheStore.bind(dataSource);

module.exports = dataSource;