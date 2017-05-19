import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from '../containers/App';
import HomeContainer from '../containers/HomeContainer';
import FinishRegistration from '../containers/FinishRegistration';
import Shop from '../containers/ShopContainer';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={HomeContainer} />
      <Route path='/reg' component={FinishRegistration} />
      <Route path='/shop' component={Shop} />
    </Route>
  </Router>
);

export default Routes;