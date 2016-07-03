var React = require('react');
var ListBookComponent = require('./listBookComponent');

var ListBookContainer = React.createClass({
  render : function(){
    return(
      <ListBookComponent />
    )
  }
});

module.exports = ListBookContainer;
