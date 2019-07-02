import './scss/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import SearchPage from './components/SearchPage';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route exact path='/search' component={SearchPage} />
    </div>
  </Router>, 
  document.getElementById('app'));