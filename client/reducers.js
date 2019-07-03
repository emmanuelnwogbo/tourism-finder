import {
  RENDER_JOBDATA
} from './constants';

const initialState = {
  jobData: {}
}

export const renderJobDetails  = (state=initialState, action={}) => {
  switch(action.type) {
    case RENDER_JOBDATA:
      return Object.assign({}, state, {
        jobData: action.payload
      });
    default:
      return state;
  }
}