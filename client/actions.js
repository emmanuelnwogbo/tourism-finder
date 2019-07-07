import {
  RENDER_JOBDATA,
  CURRENT_ROUTE,
  COOK_DETAILS,
  SEARCHING_RECIPE,
  SEARCHING_RECIPE_API,
  SEARCHING_RECIPE_API_PENDING,
  SEARCHING_RECIPE_API_FAILED,
  SIGNED_IN
} from './constants';

import { key, proxy } from '../config';

export const returnJobsBoardVal = (jobData) => ({
  type: RENDER_JOBDATA,
  payload: jobData
});

export const returnClickedRoute = (route) => {
  return {
    type: CURRENT_ROUTE,
    payload: route
  }
}

export const clickedCookDetails = (details) => {
  return {
    type: COOK_DETAILS,
    payload: details
  }
}

export const returnRecipeSearchUiValue = (value) => {
  return {
    type: SEARCHING_RECIPE,
    payload: value
  }
}

export const searchForRecipe = (value) => (dispatch) => {
  dispatch({ type: SEARCHING_RECIPE_API_PENDING })
  fetch(`${proxy}http://food2fork.com/api/search?key=${key}&q=${value}`)
    .then(response => response.json())
    .then(data => dispatch({
      type: SEARCHING_RECIPE_API,
      payload: data
    }))
    .catch(error => dispatch({
      type: SEARCHING_RECIPE_API_FAILED,
      payload: error
    }))
}

export const returnSignInState = (user_data) => {
  console.log(user_data)
  window.localStorage.setItem('user_details', JSON.stringify(user_data));
  return {
    type: SIGNED_IN,
    payload: user_data
  }
}