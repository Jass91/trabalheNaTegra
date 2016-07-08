'use strict'

var React = require('react');
var ListBookComponent = require('./listBookComponent');
var BookCardComponent = require('../Book/bookCardComponent');

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

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      books: nextProps.books
    });
  },

  render : function(){
    return(
      <ListBookComponent query={this.state.query} filter = {this.filter}>
        {this.state.books}
      </ListBookComponent>
    )
  },

  filter : function(event){
    var value = event.target.value.toLowerCase();
    var filteredArrayOfBooks = this.props.books.filter(function(elem){
    	if(elem.props.item.title.toLowerCase().includes(value)|| 
         elem.props.item.author.toLowerCase().includes(value)){
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