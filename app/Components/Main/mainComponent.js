var React = require('react');
var Link = require('react-router').Link;

var MainComponent = function(props){
	return(
	  <div>
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbarContent">
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span> 
			      </button>
			      <Link className="navbar-brand" to="/">
			      	<img className="img-responsive"src="http://tegra.me/static/images/tegra_logo.png" width="100"/>
			      </Link>
			    </div>
			    <div className="collapse navbar-collapse" id="navbarContent">
			      <ul className="nav navbar-nav">
							<li className={(location.pathname == '/') ? "active" : ""} >
								<Link to = "/">Home</Link>
							</li>
							<li className={(location.pathname == '/shopcart') ? "active" : ""}>
								<Link to = "shopcart">Shopcart</Link>
							</li>
						</ul>
						<ul className="nav navbar-nav navbar-right">
			        <li>
			        	<a href="https://github.com/Jass91">Jesley Cáceres Marcelino</a>
			        </li>
			        <li>
			        	<img
			        		src="https://avatars1.githubusercontent.com/u/14570987?v=3&s=460"
			        		className="img-responsive rounded"
			        		width="50" />
			        </li>
			      </ul>
			    </div>
			  </div>
			</nav>
	    <main className="container">
	      {props.content}
	    </main>
	  </div>
	);
  
};

module.exports = MainComponent;
