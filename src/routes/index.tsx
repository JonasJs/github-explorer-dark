import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Details from '../Pages/Details';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/details" component={Details} />
  </Switch>
);

export default Routes;
