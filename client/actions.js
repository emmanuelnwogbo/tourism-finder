import {
  RENDER_JOBDATA,
  CURRENT_ROUTE
} from './constants';

export const returnJobsBoardVal = (jobData) => ({
  type: RENDER_JOBDATA,
  payload: jobData
});

export const returnClickedRoute = (route) => {
  console.log('clicked', route)
  return {
    type: CURRENT_ROUTE,
    payload: route
  }
}