var React = require('react');
var Link = require('react-router').Link;

var MainComponent = function(props){
	return(
	  <div>
	    <nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<Link to = "/" className="navbar-brand">Desafio Tegra - Bookcart</Link>
					</div>
					<ul className="nav navbar-nav">
						<li className={(location.pathname == '/') ? "active" : ""} >
							<Link to = "/">Home</Link>
						</li>
						<li className={(location.pathname == '/shopcart') ? "active" : ""}>
							<Link to = "shopcart">Shopcart</Link>
						</li>
					</ul>
				</div>
			</nav>
	    <main className="container">
	      {props.content}
	    </main>
	  </div>
	);
  
};

module.exports = MainComponent;
