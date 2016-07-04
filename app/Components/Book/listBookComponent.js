var React = require('react');

var ListBookComponent = function(props){

  return(
   	<div>
   		<div className="row">
   			<div className="col-xs-12 col-md-12 col-lg-12">
   				<div className="input-group">
              <input type="text" className="form-control" placeholder="Search" name="q" />
              <div className="input-group-btn">
                  <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
              </div>
          </div>
   			</div>
   		</div>
      <br/>
   		<div className="row">
        {props.books}
      </div>
  	</div>
  );
};

module.exports = ListBookComponent;
