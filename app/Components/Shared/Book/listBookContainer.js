'use strict'

var React = require('react');
var ListBookComponent = require('./listBookComponent');
var BookCardComponent = require('./BookCardComponent');
var ListItem = require('../ListItem/listItem');

var ListBookContainer = React.createClass({

  getInitialState : function(){
    var self = this;
    return(
    	{
				books : self.props.books,
				query: ""
			}
		);
  },

  render : function(){
    return(
      <ListBookComponent
      	books={this.bookArrayToListItemArray()}
      	actionPanel = {this.props.actionPanel}
      	query={this.state.query}
      	filter = {this.filter} />
    )
  },

  bookArrayToListItemArray : function(){
    var self = this;
    return this.state.books.map(function(book, index){
      return (
        <div key={index}>
          <ListItem
          	item={book}
          	actionPanel={self.props.actionPanel}
          />
        </div>
      );
    });
  },

  filter : function(event){
    var value = event.target.value;
    var filteredArrayOfBooks = this.props.books.filter(function(book){
    	if(book.title.includes(value) || book.author.includes(value)){
    		return true;
    	}
    });

    this.setState({
    	books: filteredArrayOfBooks,
    	query: value
    });

  }

});

module.exports = ListBookContainer;