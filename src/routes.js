import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Quotation from './pages/Quotation'

export default function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Quotation} />
      </Switch>
    </BrowserRouter>
  )
}