import {
  RENDER_JOBDATA,
  CURRENT_ROUTE,
  COOK_DETAILS,
  SEARCHING_RECIPE
} from './constants';

const initialState = {
  jobData: {},
  currentRoute: 'Home',
  profileViewDetails: '',
  recipeSearchUiVal: ''
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
    default:
      return state;
  }
}