import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DefaultScreen from '../containers/DefaultScreen/DefaultScreen';

const AppRouter = () => (
  <BrowserRouter>
    <div className='appRouterContent'>
      <Switch>
        <Route path="/" component={DefaultScreen} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
