var React = require('react');
var HomeComponent = require('./homeComponent');

var HomeContainer = React.createClass({
  render : function(){
    return(
      <HomeComponent />
    )
  }
});

module.exports = HomeContainer;