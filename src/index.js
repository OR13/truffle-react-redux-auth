import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { UserIsAuthenticated, UserIsNotAuthenticated } from './util/wrappers.js'

// Layouts
import App from './App';
import Home from './layouts/Home';
import Dashboard from './layouts/Dashboard';
import CreateLoan from './components/createLoan';
import SignUp from './layouts/SignUp';
import Profile from './layouts/Profile';

// Redux Store
import store from './store';

// Config
import truffleConfig from './../truffle-config.js'

const history = syncHistoryWithStore(browserHistory, store)

console.log(truffleConfig);

ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="dashboard" component={UserIsAuthenticated(Dashboard)} />
          <Route path="create-loan" component={UserIsAuthenticated(CreateLoan)} />
          <Route path="signup" component={UserIsNotAuthenticated(SignUp)} />
          <Route path="profile" component={UserIsAuthenticated(Profile)} />
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
);
