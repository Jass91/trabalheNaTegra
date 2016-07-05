'use strict'

var React = require('react');

const HomeActionPanelComponent = function(props){
  return(
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
            ref="btnAddToCart"
            type="button"
            value="Add to cart"
            className="btn btn-success"
            onClick={function(){
              //props.addToCart(React.findDOMNode(this.refs.myInput))
            }}
          />
        </div>
      </div>
    </div>
  );
};

module.exports = HomeActionPanelComponent;