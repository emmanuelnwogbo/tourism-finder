import './scss/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { returnDetails, returnDetails2 } from './reducers';
const logger = createLogger();

const rootReducer = combineReducers({
  returnDetails,
  returnDetails2
});

const store = createStore(
  rootReducer, 
  applyMiddleware(thunkMiddleware, logger))
  
import App from './App';
import RecipeSearchPage from './components/RecipeSearchPage';
import CooksSearchPage from './components/CooksSearchPage';
import JobsSearchPage from './components/JobsSearchPage';
import ProfileView from './components/ProfileView';
import FormView from './components/FormView';
  
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route exact path='/Recipes' component={RecipeSearchPage} />
        <Route exact path='/Cooks' component={CooksSearchPage} />
        <Route path='/Jobs' component={JobsSearchPage} />
        <Route path='/ProfileView' component={ProfileView} />
        <Route path='/FormViewCook' component={FormView} />
      </div>
    </Router>,
  </Provider>,  
  document.getElementById('app'));