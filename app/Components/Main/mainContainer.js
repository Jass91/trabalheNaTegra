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
    
    // toaster config
		toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-top-center",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "300",
      "timeOut": "1000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "show",
      "hideMethod": "fadeOut"
    };

	}

});

module.exports = MainContainer;