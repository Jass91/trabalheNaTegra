'use strict'

var React = require('react');
var MainComponent = require('./mainComponent');

var MainContainer = React.createClass({

	render : function(){
		return(
			<MainComponent content={this.props.children} />
		);
	}

});

module.exports = MainContainer;