import {
  RENDER_JOBDATA,
  CURRENT_ROUTE,
  COOK_DETAILS,
  SEARCHING_RECIPE
} from './constants';

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