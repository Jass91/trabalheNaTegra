var React = require('react');
var ListBookContainer = require('../Book/listBookContainer');

var HomeComponent = function(props){

  return(
    <div>
   	  <ListBookContainer
        books = {props.books}
        primaryAction={props.addToCart}/>
    </div>
  );

};

module.exports = HomeComponent