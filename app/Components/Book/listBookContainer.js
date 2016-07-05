var React = require('react');

var ListBookComponent = require('./listBookComponent');
var BookCardComponent = require('../Shared/BookCard/BookCardComponent');

var ListBookContainer = React.createClass({

  getInitialState : function(){
    var self = this;
    return {
    					books : self.props.books,
    					query: ""
    				};
  },

  render : function(){
    return(
      <ListBookComponent
      	books={this.toBookCardArray(this.state.books)}
      	query={this.state.query}
      	filter = {self.filter} />
    )
  },

  toBookCardArray : function(books){
    var self = this;
    return books.map(function(book, index){
      return (
        <div key={index} className="col-lg-4 col-md-4 col-xs-12">
          <BookCardComponent
            book = {book}
            primaryAction = {self.props.primaryAction} />
        </div>
      );
    });
  },

  filter : function(event){
  	debugger;
    var value = event.target.value;

    var filteredArrayOfBooks = this.props.books.filter(function(book){
    	if(book.name.contains(value) || book.author.contains(value)){
    		return true;
    	}
    });

    this.setState({books: filteredArrayOfBooks});
  }

});

module.exports = ListBookContainer;