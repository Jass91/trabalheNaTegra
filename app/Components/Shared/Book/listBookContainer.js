'use strict'

var React = require('react');
var ListBookComponent = require('./listBookComponent');
var BookCardComponent = require('./bookCardComponent');

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
      <ListBookComponent query={this.state.query} filter = {this.filter}>
        {this.state.books}
      </ListBookComponent>
    )
  },

  filter : function(event){
    var value = event.target.value;
    var filteredArrayOfBooks = this.props.books.filter(function(elem){
    	if(elem.props.item.title.includes(value) || elem.props.item.author.includes(value)){
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