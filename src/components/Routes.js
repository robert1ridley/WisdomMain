import React from 'react';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default () => (
  <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="*" exact component={NotFound}/>
      </Switch>
  </BrowserRouter>
)