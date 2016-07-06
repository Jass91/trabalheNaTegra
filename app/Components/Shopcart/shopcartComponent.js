'use strict'
var React = require('react');
var ListBookContainer = require('../Shared/Book/listBookContainer');

var ShopcartComponent = function(props){
  return(
  	<div>
	    <div className="row">
	    	<div className = "col-xs-6 col-md-6 col-lg-6">
	    		<h3><span className="pull-left label label-info">Number of items: {props.count}</span></h3>
	    	</div>
	    	<div className = "col-xs-6 col-md-6 col-lg-6">
	    		<h3><span className="pull-left label label-info">Total Price: R$ {props.price}</span></h3>
	    	</div>
			</div>
			<br/>
			<div className="row">
	    	<div className = "col-xs-12 col-md-12 col-lg-12">
	      	<ListBookContainer books = {props.cart} />
	      </div>
	    </div>
	  </div>
  );

};

module.exports = ShopcartComponent
