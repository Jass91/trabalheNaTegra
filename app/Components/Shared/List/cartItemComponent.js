'use strict'

var React = require('react');
var BookCardComponent = require('../Book/BookCardComponent');

var CartItemComponent = function(props){
	
	return(
		<div className="col-lg-4 col-md-4 col-xs-12">
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
			            	id="quantityToRemove"
			            	disabled = {props.disabled}
			            	value={props.quantity}
			            	onChange={props.handleQuantityChange}
			            />
			          </div>
			        </div>
			      </div>
			      <div className="col-xs-6 col-md-6 col-lg-6 right">
			        <div className="pull-right">
			          <input
			            type="button"
			            value="Remove from cart"
			            className="btn btn-danger"
			            disabled = {props.disabled}
			            onClick={props.handleRemoveFromCartClick}
			          />
			        </div>
			      </div>
			    </div>
	    </div>
	 	</div>
	);
};

module.exports = CartItemComponent;
