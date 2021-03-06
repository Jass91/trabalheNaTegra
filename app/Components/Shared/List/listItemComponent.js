'use strict'

var React = require('react');
var BookCardComponent = require('../Book/BookCardComponent');

var ListItemComponent = function(props){
	
	return(
		<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
	    <div className="well">
	      <div>
	        <BookCardComponent book = {props.item} />
	      </div>
	      <hr style={{borderColor: "black"}}/>
					<div className="row">
			      <div className="col-xs-6 col-md-6 col-lg-6 left">
			        <div className="form-group">
			          <div className="pull-left">
			            <input
			            	type="number"
			            	className="form-control"
			            	id="quantityChooser"
			            	disabled = {props.exhausted}
			            	value={props.quantity}
			            	onChange={props.handleQuantityChange}
			            />
			          </div>
			        </div>
			      </div>
			      <div className="col-xs-6 col-md-6 col-lg-6 right">
			        <div className="pull-right">
			          <button className={props.class} disabled = {props.disabled} onClick={props.handleClick}>
			          	{props.btnTitle} <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/28468-200.png" width="24" />
			          </button>
			        </div>
			      </div>
			    </div>
			    <div className="row">
			    	<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			    		<div className="text-left">
			    			<span className="label label-warning">Total: R$ {props.item.price * props.quantity}</span>
			    		</div>
			    	</div>
			    </div>
			
	    </div>
	 	</div>
	);
};

module.exports = ListItemComponent;
