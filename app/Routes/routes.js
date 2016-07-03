var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var BrowserHistory = ReactRouter.browserHistory;

var Main = require('../Components/Main/mainComponent');
var Home = require('../Components/Home/homeContainer');
var ListBook = require('../Components/Book/listBookContainer');

var Routes = (
  <Router history={BrowserHistory}>
    <Route component={Main}>
 			<Route path = '/' component={Home} />
			<Route path = 'books' component={ListBook}>
			</Route>
		</Route>
  </Router>
)

module.exports = Routes;
