var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var BrowserHistory = ReactRouter.browserHistory;

var Main = require('../Components/Main/mainComponent');
var Shopcart = require('../Components/Shopcart/shopcartContainer');
var ListBook = require('../Components/Book/listBookContainer');

var Routes = (
  <Router history={BrowserHistory}>
    <Route component={Main}>
 			<Route path = '/' component={ListBook} />
			<Route path = 'shopcart' component={Shopcart} />
		</Route>
  </Router>
)

module.exports = Routes;
