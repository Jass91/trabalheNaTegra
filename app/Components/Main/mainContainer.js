'use strict'

var React = require('react');
var MainComponent = require('./mainComponent');

var MainContainer = React.createClass({

	render : function(){
		return(
			<MainComponent content={this.props.children} />
		);
	},

	componentWillMount :function(){
    
		toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-top-center",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "show",
      "hideMethod": "fadeOut"
    };
	}

});

module.exports = MainContainer;