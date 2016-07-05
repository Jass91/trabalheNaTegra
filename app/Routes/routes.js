var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var BrowserHistory = ReactRouter.browserHistory;

var Main = require('../Components/Main/mainComponent');
var Shopcart = require('../Components/Shopcart/shopcartContainer');
var Home = require('../Components/Home/HomeContainer');

var Routes = (
  <Router history={BrowserHistory}>
    <Route component={Main}>
 			<Route path = '/' component={Home} />
			<Route path = 'shopcart' component={Shopcart} />
		</Route>
  </Router>
)

module.exports = Routes;
