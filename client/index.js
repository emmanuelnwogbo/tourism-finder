import './scss/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import RecipeSearchPage from './components/RecipeSearchPage';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route exact path='/Recipes' component={RecipeSearchPage} />
    </div>
  </Router>, 
  document.getElementById('app'));