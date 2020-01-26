import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import Quotation from './pages/quotation'

export default function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Provider store={store}>
          <Route path='/' exact component={Quotation} />
        </Provider>
      </Switch>
    </BrowserRouter>
  )
}