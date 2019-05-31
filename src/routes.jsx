import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      {/* <Route path="/groups/" component={Groups} />
      <Route path="/users/" component={Users} />
      <Route path="/groups/:id" component={Groups} />
      <Route path="/users/:id" component={Users} /> */}
    </Switch>
  </BrowserRouter>
);

export default Routes;
