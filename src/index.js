import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';

import App from './App';
import Login from "./components/Login.js";
import NotFound from "./components/NotFound.js";


const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={ Login } />
      <Route path='/Users/:user' component={ App } />
      <Route component={ NotFound } />
    </Switch>
  </BrowserRouter>
)


ReactDOM.render(<Root />, document.getElementById('root'));
