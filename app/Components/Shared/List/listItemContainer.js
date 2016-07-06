var React = require('react');
var ListItemComponent = require('./listItemComponent');

var ListItemContainer = React.createClass({

	getInitialState : function(){
		return {quantity: 0};
	},

  render : function(){
    return (
      <ListItemComponent 
        item={this.props.item}
        quantity={this.state.quantity}
        handleClick={this.props.handleClick}
        handleQuantityChange={this.handleQuantityChange}
      />
    );
  },
 
  handleQuantityChange : function(event){
    debugger;
    var value = event.target.value;
    if(value >= 0 && value <= this.props.item.quantity){
      this.setState({quantity: value});
    }
  }

});

module.exports = ListItemContainer;