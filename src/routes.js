import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Quotation from './pages/Quotation'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Quotation} />
        <Route path='/quotation' component={Quotation} />
        <Redirect from='*' to='/quotation' />
    </Router>
)
