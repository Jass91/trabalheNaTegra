'use strict'

var React = require('react');
var BookCardComponent = require('../Book/bookCardComponent');

var ListItemComponent = function(props){
	return(
		<div className="col-lg-4 col-md-4 col-xs-12">
	    <div className="well bookcard">
	      <div>
	        <BookCardComponent book = {props.item} />
	      </div>
	      <hr style={{borderColor: "black"}}/>
					<div className="row">
			      <div className="col-xs-6 col-md-6 col-lg-6 left">
			        <div class="form-group">
			          <div className="pull-left">
			            <input
			            	type="number"
			            	className="form-control"
			            	id="quantityChooser"
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
			            value="Add to cart"
			            className="btn btn-success"
			            onClick={function(){
			              props.handleClick(props.item, props.quantity);
			            }}
			          />
			        </div>
			      </div>
			    </div>
			    <div className="row">
			    	<div col-xs-12 col-md-12 col-lg-12>
			    		<div className="container text-left">
			    			Total: R$ {props.item.price * props.quantity}
			    		</div>
			    	</div>
			    </div>
	    </div>
	 	</div>
	);
};

module.exports = ListItemComponent;
