import {
  RENDER_JOBDATA
} from './constants';

export const returnJobsBoardVal = (jobData) => ({
  type: RENDER_JOBDATA,
  payload: jobData
});