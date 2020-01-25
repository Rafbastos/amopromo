import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Quotation from './pages/quotation'

export default function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Quotation} />
      </Switch>
    </BrowserRouter>
  )
}