import {
  RENDER_JOBDATA,
  CURRENT_ROUTE,
  COOK_DETAILS,
  SEARCHING_RECIPE,
  SEARCHING_RECIPE_API,
  SEARCHING_RECIPE_API_PENDING,
  SEARCHING_RECIPE_API_FAILED
} from './constants';

const initialState = {
  jobData: {},
  currentRoute: 'Home',
  profileViewDetails: '',
  recipeSearchUiVal: '',
  recipes: []
}

export const returnDetails  = (state=initialState, action={}) => {
  switch(action.type) {
    case RENDER_JOBDATA:
      return Object.assign({}, state, {
        jobData: action.payload
      });
    case CURRENT_ROUTE:
      return Object.assign({}, state, {
        currentRoute: action.payload
      });
    case COOK_DETAILS:
      return Object.assign({}, state, {
        profileViewDetails: action.payload
      })
    case SEARCHING_RECIPE:
      return Object.assign({}, state, {
        recipeSearchUiVal: action.payload
      })
    case SEARCHING_RECIPE_API_PENDING:
      return Object.assign({}, state, {
        recipes: []
    })
    case SEARCHING_RECIPE_API:
      return Object.assign({}, state, {
        recipes: action.payload.recipes
    })
    default:
      return state;
  }
}

export const returnDetails2 = (state=initialState, action={}) => {
  switch(action.type) {
    case SEARCHING_RECIPE_API:
        return Object.assign({}, state, {
          recipes: action.payload.recipes
      })
    default:
      return state;
  }
}