var React = require('react');
var CartItemComponent = require('./listItemComponent');

var CartItemContainer = React.createClass({

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
      <CartItemComponent 
        item={this.state.item}
        quantity={this.state.quantity}
        disabled = {this.state.item.quantity < 1 ? true: false}
        handleRemoveFromCartClick={this.handleRemoveFromCartClick}
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

  handleRemoveFromCartClick : function(){
    this.props.handleClick(this.state.item, this.state.quantity);
    this.setState({quantity: 0});
  }

});

module.exports = CartItemContainer;