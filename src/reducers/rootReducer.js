import { combineReducers } from 'redux';
import timesheetStore from './timesheetStore';
import userStore from './userStore';
import fetchStore from './fetchStatus';
import staticStore from './staticStore';
import userDataStatus from './userDataStatus';
import updateRowStatus from './updateRowStatus';
import calendarStore from './calendarStore';

export default combineReducers({
  timesheetStore,
  userStore,
  fetchStore,
  staticStore,
  userDataStatus,
  updateRowStatus,
  calendarStore,
});
