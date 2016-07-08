'use strict'

const dataSource = {
	cart: [],
	books: [
	  {
	    id: 1,
	    title: "The Pragmatic Programmer: From Journeyman to Master",
	    author: "Andrew Hunt & Dave Thomas",
	    price: 40.00,
	    quantity: 12,
	    image: "https://images-na.ssl-images-amazon.com/images/I/41BKx1AxQWL._SX396_BO1,204,203,200_.jpg"
	  },
	  {
	    id: 2,
	    title: "The Mythical Man-Month: Essays on Software Engineering",
	    author: "Frederick P. Brooks",
	    price: 80.00,
	    quantity: 1,
	    image: "https://images-na.ssl-images-amazon.com/images/I/51xCKsOn83L._AC_AA160_.jpg"
	  },
	  {
	    id: 3,
	    title: "Expressões Regulares - Uma Abordagem Divertida",
	    author: "Aurelio Marinho Jargas",
	    price: 20.00,
	    quantity: 13,
	    image: "https://images-na.ssl-images-amazon.com/images/I/41nDUOp+UgL._AC_AA160_.jpg"
	  },
	  {
	    id: 4,
	    title: "Domain Driven Design: Tackling Complexity in the Heart of Software",
	    author: "Eric Evans",
	    price: 120.00,
	    quantity: 42,
	    image: "https://images-na.ssl-images-amazon.com/images/I/51OWGtzQLLL._AC_AA160_.jpg"
	  },
	  {
	    id: 5,
	    title: "Patterns of Enterprise Application Architecture",
	    author: "Martin Fowler",
	    price: 32.00,
	    quantity: 42,
	    image: "https://images-na.ssl-images-amazon.com/images/I/51IuDvAU1CL._AC_AA160_.jpg"
	  },
	  {
	    id: 6,
	    title: "Epigrams in Programming",
	    author: "Alan Perils",
	    price: 31.00,
	    quantity: 0,
	    image: "https://d30y9cdsu7xlg0.cloudfront.net/png/3542-200.png"
	  },
	  {
	    id: 7,
	    title: "Implementing Domain-Driven Design",
	    author: "Vaughn Vernon",
	    price: 31.00,
	    quantity: 42,
	    image: "https://images-na.ssl-images-amazon.com/images/I/51p16XLhuiL._AC_AA160_.jpg"
	  },
	  {
	    id: 8,
	    title: "Dive Into HTML5",
	    author: "Mark Pilgrim",
	    price: 22.00,
	    quantity: 42,
	    image: "https://d30y9cdsu7xlg0.cloudfront.net/png/3542-200.png"
	  },
	  {
	    id: 9,
	    title: "Scalable Internet Architectures",
	    author: "Theo Schlossnagle",
	    price: 18.00,
	    quantity: 4,
	    image: "https://images-na.ssl-images-amazon.com/images/I/51J8DvW24ML._AC_AA160_.jpg"
	  },
	  {
	    id: 10,
	    title: "Refactoring: Improving the Design of Existing Code",
	    author: "Martin Fowler",
	    price: 33.00,
	    quantity: 2,
	    image: "https://images-na.ssl-images-amazon.com/images/I/51K-M5hR8qL._AC_AA160_.jpg"
	  },
	  {
	    id: 11,
	    title: "Treinamento Em C",
	    author: "Victorine Viviane Mizrahi",
	    price: 42.00,
	    quantity: 6,
	    image: "https://images-na.ssl-images-amazon.com/images/I/41vQE41qtDL._AC_AA160_.jpg"
	  },
	  {
	    id: 12,
	    title: "Algoritmos: Teoria e Prática",
	    author: "Thomas H. Cormen",
	    price: 4.60,
	    quantity: 1,
	    image: "https://images-na.ssl-images-amazon.com/images/I/41k0Z+3tk+L._AC_AA160_.jpg"
	  }]
};

function funcUpdateBookQuantity(book, quantity){
  var bookToUpdate = this.books.find(function(e){
  	return e.id == book.id;
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