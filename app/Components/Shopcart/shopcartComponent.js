'use strict'
var React = require('react');
var ListBookContainer = require('../Shared/Book/listBookContainer');

var ShopcartComponent = function(props){
  return(
    <div>
      <ListBookContainer books = {props.cart} />
    </div>
  );

};

module.exports = ShopcartComponent
