'use strict';
import { getAllCakes } from './api';

import React                       from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import CreateBrowserHistory        from 'history/lib/createBrowserHistory';

import App from './App';
import AddCakeView from './AddCakeView';
import EditCakeView from './EditCakeView';


export default (
  <Router history={CreateBrowserHistory()}>
    <Route path="/" component={App} render={(self) => {
    getAllCakes(App);
    return <App />;
} } />
    <Route path="/new" component={AddCakeView} />
    <Route path="/edit/:cakeId" component={EditCakeView} />
  </Router>
);
