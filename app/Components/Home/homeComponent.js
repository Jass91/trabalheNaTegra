'use strict'
var React = require('react');
var ListBookContainer = require('../Shared/Book/listBookContainer');
var HomeActionPanel = require('./homeActionPanelComponent');


var HomeComponent = function(props){

  var actionPanel = (<HomeActionPanel addToCart = {props.addToCart} /> );

  return(
    <div>
   	  <ListBookContainer
        books = {props.books}
        actionPanel = {actionPanel}
      />
    </div>
  );

};

module.exports = HomeComponent