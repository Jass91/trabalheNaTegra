'use strict'
var React = require('react');
var ListBookContainer = require('../Shared/Book/listBookContainer');

var HomeComponent = function(props){
  return(
    <div>
   	  <ListBookContainer books = {props.books} />
    </div>
  );

};

module.exports = HomeComponent
