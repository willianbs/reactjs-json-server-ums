import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Users from './pages/Users';
import UserDetail from './pages/Users/Detail';
import NewUser from './pages/Users/NewUser';
import EditUser from './pages/Users/EditUser';
// import Groups from './pages/Users';
// import GroupDetail from './pages/Groups/Detail';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />

      <Route path="/users/" component={Users} />
      <Route path="/user/new" exact component={NewUser} />
      <Route path="/user/:id/edit" component={EditUser} />
      <Route path="/user/:id" component={UserDetail} />
      {/* <Route path="/groups/" component={Groups} />
      <Route path="/group/:id" component={GroupDetail} /> */}
    </Switch>
  </BrowserRouter>
);

export default Routes;
