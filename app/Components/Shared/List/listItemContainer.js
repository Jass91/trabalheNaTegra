var React = require('react');
var ListItemComponent = require('./listItemComponent');

var ListItemContainer = React.createClass({

	getInitialState : function(){
		return(
      {
        quantity: 0,
        item: this.props.item
      }
    );
	},

  render : function(){
    return (
      <ListItemComponent 
        btnTitle = {this.props.btnTitle}
        item={this.state.item}
        quantity={this.state.quantity}
        className = {this.props.btnTitle == "Add to cart" ? "btn btn-success" : "btn btn-danger"}
        disabled = {this.state.item.quantity < 1 || this.state.quantity == 0 ? true: false}
        exhausted = {this.state.item.quantity == 0 ? true: false}
        handleClick={this.handleClick}
        handleQuantityChange={this.handleQuantityChange}
      />
    );
  },
 
  handleQuantityChange : function(event){
    var value = parseInt(event.target.value);
    if(value >= 0 && value <= this.props.item.quantity){
      this.setState({quantity: value});
    }
    
  },
  
  handleClick : function(){
    this.props.handleClick(this.state.item, this.state.quantity);
    this.setState({quantity: 0});
  }

});

module.exports = ListItemContainer;