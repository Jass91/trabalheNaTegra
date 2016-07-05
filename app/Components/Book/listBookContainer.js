var React = require('react');
var ListBookComponent = require('./listBookComponent');

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
      	books={this.state.books}
      	query={this.state.query}
      	filter = {self.filter} />
    )
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
