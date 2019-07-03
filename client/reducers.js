import {
  RENDER_JOBDATA,
  CURRENT_ROUTE
} from './constants';

const initialState = {
  jobData: {},
  currentRoute: 'Home'
}

export const renderJobDetails  = (state=initialState, action={}) => {
  switch(action.type) {
    case RENDER_JOBDATA:
      return Object.assign({}, state, {
        jobData: action.payload
      });
    case CURRENT_ROUTE:
      return Object.assign({}, state, {
        currentRoute: action.payload
      });
    default:
      return state;
  }
}