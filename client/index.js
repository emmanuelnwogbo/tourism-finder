import './scss/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { renderJobDetails } from './reducers';
const logger = createLogger();

const rootReducer = combineReducers({
  renderJobDetails
});

const store = createStore(
  rootReducer, 
  applyMiddleware(thunkMiddleware, logger))
  
import App from './App';
import RecipeSearchPage from './components/RecipeSearchPage';
import CooksSearchPage from './components/CooksSearchPage';
import JobsSearchPage from './components/JobsSearchPage';
  
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route exact path='/Recipes' component={RecipeSearchPage} />
        <Route exact path='/Cooks' component={CooksSearchPage} />
        <Route path='/Jobs' component={JobsSearchPage} />
        </div>
    </Router>,
  </Provider>,  
  document.getElementById('app'));