var React = require('react');
var Link = require('react-router').Link;

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <nav className="navbar navbar-default">
			<div className="container-fluid">
				<div className="navbar-header">
					<Link to = "/" className="navbar-brand">Desafio Tegra - Bookcart</Link>
				</div>
				<ul className="nav navbar-nav">
					<li className="active" ><Link to = "/">Home</Link></li>
					<li><Link to = "shopcart">Shopcart</Link></li>
				</ul>
			</div>
		</nav>
        <main className="container">
          {this.props.children}
        </main>
      </div>
    );
  }
});

module.exports = Main;
