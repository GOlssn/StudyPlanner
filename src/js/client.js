import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Goals from './pages/Goals';
import Layout from './pages/Layout';
import LayoutContainer from './pages/LayoutContainer';
import NotFound from './pages/NotFound';
import SignedInLayout from './pages/SignedInLayout';

const app = document.getElementById("app");
ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={LayoutContainer}>
        <Route component={Layout}>
          <IndexRoute component={Auth}></IndexRoute>
        </Route>

        <Route component={SignedInLayout}>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/goals" component={Goals}></Route>
        </Route>

        <Route path="*" component={NotFound}></Route>
      </Route>
    </Router>
, app);
