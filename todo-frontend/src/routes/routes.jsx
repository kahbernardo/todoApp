import React from 'react';
import { Route, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Todo from '../views/todo';
import About from '../views/about'

const Routes = props => (
  <BrowserRouter>
    <Redirect from='*' to='/todo' />
    <Route path='/todo' component={Todo} />
    <Route path='/about' component={About} />
  </BrowserRouter>
)

export default Routes