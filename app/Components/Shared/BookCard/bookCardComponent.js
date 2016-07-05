var React = require('react');

var BookCardComponent = function(props){

  return(
   	<div className="well bookcard">
   		<div className="row">
   			<div className="col-xs-6">
   				<div className="row">
   					<div className="col-xs-12 col-md-12 col-lg-12">
		   				<img src="https://d30y9cdsu7xlg0.cloudfront.net/png/3542-200.png"
		   						 className="img-thumbnail thumbnail" />
		   			</div>
		   			<div className="col-xs-12 col-md-12 col-lg-12">
	   					<span className="badge">{props.book.quantity}</span>
	   				</div>
	   			</div>
   			</div>
   			<div className="col-xs-6">
   				<div className="row">
   					<div className="col-xs-12 col-md-12 col-lg-12">
   						<div className="text-justify">
   							<h4>{props.book.title}</h4>
   						</div>
   					</div>
   					<div className="col-xs-12 col-md-12 col-lg-12">
   						<div className="text-center">
   							<h5>{props.book.author}</h5>
   						</div>
   					</div>
   				</div>
   			</div>
 			</div>
 			<hr style={{borderColor: "black"}}/>
 			<div className="row">
 				<div className="col-xs-12 col-md-12 col-lg-12">
	   			<div className="text-center">
	   				<h1>R$ {props.book.price}</h1>
	   			</div>
	   		</div>
 			</div>
      <hr style={{borderColor: "black"}}/>
      <div className="row">
        <div className="col-xs-6 col-md-6 col-lg-6 right">
          <button
            className="btn btn-success"
            onClick={function(){props.add(props.book)}}>Add to cart</button>
        </div>
        <div className="col-xs-6 col-md-6 col-lg-6 left">
          <button
            className="btn btn-danger"> Remove from cart</button>
        </div>
      </div>
 		</div>
  );
};

module.exports = BookCardComponent