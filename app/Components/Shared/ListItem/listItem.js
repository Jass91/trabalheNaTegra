'use strict'

var React = require('react');
var BookCardComponent = require('../Book/bookCardComponent');

var ListItem = function(props){
	return(
		<div className="col-lg-4 col-md-4 col-xs-12">
	    <div className="well bookcard">
	      <div>
	        <BookCardComponent book = {props.item} />
	      </div>
	      <hr style={{borderColor: "black"}}/>
	      <div>
	      	{props.actionPanel}
	    	</div>
	    </div>
	 	</div>
	);
};

module.exports = ListItem;