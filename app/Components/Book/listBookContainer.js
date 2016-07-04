var React = require('react');

var ListBookComponent = require('./listBookComponent');
var BookCardComponent = require('../Shared/BookCard/BookCardComponent');

var ListBookContainer = React.createClass({

	getInitialState : function(){
		return(
		{
			books: [
				{
					title: "The Pragmatic Programmer: From Journeyman to Master",
					author: "Andrew Hunt & Dave Thomas",
					price: 40.00,
					quantity: 12
				},
				{
					title: "The Mythical Man-Month: Essays on Software Engineering",
					author: "Frederick P. Brooks",
					price: 80.00,
					quantity: 1
				},
				{
					title: "Expressões Regulares - Uma Abordagem Divertida",
					author: "Aurelio Marinho Jargas",
					price: 20.00,
					quantity: 13
				},
				{
					title: "Domain Driven Design: Tackling Complexity in the Heart of Software",
					author: "Eric Evans",
					price: 120.00,
					quantity: 42
				},
				{
					title: "Patterns of Enterprise Application Architecture",
					author: "Martin Fowler",
					price: 32.00,
					quantity: 42
				},
				{
					title: "Epigrams in Programming",
					author: "Alan Perils",
					price: 31.00,
					quantity: 0
				},
				{
					title: "Implementing Domain-Driven Design",
					author: "Vaughn Vernon",
					price: 31.00,
					quantity: 42
				},
				{
					title: "Dive Into HTML5",
					author: "Mark Pilgrim",
					price: 22.00,
					quantity: 42
				},
				{
					title: "Scalable Internet Architectures",
					author: "Theo Schlossnagle",
					price: 18.00,
					quantity: 4
				},
				{
					title: "Refactoring: Improving the Design of Existing Code",
					author: "Martin Fowler",
					price: 33.00,
					quantity: 2
				},
				{
					title: "Treinamento Em C",
					author: "Victorine Viviane Mizrahi",
					price: 42.00,
					quantity: 6
				},
				{
					title: "Algoritmos: Teoria e Prática",
					author: "Thomas H. Cormen",
					price: 4.60,
					quantity: 1
				}
			]
		});
	},

  render : function(){
    return(
      <ListBookComponent books={this.toBookCardArray(this.state.books)}/>
    )
  },

  toBookCardArray : function(books){
  	return books.map(function(book, index){
  		return (
  			<div key={index} className="col-lg-4 col-md-4 col-xs-12">
  				<BookCardComponent book = {book} />
  			</div>
  		);
  	});
  }

});

module.exports = ListBookContainer;