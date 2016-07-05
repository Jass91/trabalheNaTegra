'use strict'

var React = require('react');
var BookCardComponent = require('../Book/bookCardComponent');

var CartItem = function(props){
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
                  <input type="number" class="form-control" id="quantityChooser" />
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-6 right">
              <div className="pull-right">
                <input
                  type="button"
                  value="Remove from cart"
                  className="btn btn-success"
                  onClick={function(){
                    //props.addToCart(React.findDOMNode(this.refs.myInput))
                  }}
                />
              </div>
            </div>
          </div>
	    </div>
	 	</div>
	);
};

module.exports = ListItem;
