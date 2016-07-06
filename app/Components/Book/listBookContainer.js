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
      	filter = {this.filter} />
    )
  },

  filter : function(event){
  	debugger;
    var value = event.target.value;
    var filteredArrayOfBooks = this.props.books.filter(function(item){
    	debugger;
      if(item.props.book.name.contains(value) || item.props.book.author.contains(value)){
    		return true;
    	}
    });

    this.setState({books: filteredArrayOfBooks});
  }

});

module.exports = ListBookContainer;
