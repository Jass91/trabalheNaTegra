'use strict'
var React = require('react');
var ListBookContainer = require('../Shared/List/listBookContainer');

var HomeComponent = function(props){
  return(
    <div>
   	  <ListBookContainer books = {props.books} />
    </div>
  );

};

module.exports = HomeComponent
