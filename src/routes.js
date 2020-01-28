import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import Quotation from './pages/quotation'
import Purchase from './pages/purchase'

export default function Routers() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
            <Route path='/quotation' exact component={Quotation} />
            <Route path='/purchase' component={Purchase} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}