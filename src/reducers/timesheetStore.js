import { getMonths } from '../utils/utils';

// transformations
import {
  formatMonthDays,
  updateRowTime,
  updateDeviationTime,
  updateRowDeviationType,
  resetToDefaultTime,
} from './transformations/timesheetStoreTransformations';

export default function timesheetStore(
  state = {
    basePlannedTime: 0,
    workedTime: 0,
    dayOffTime: 0,
    defaultStartTime: 0,
    months: getMonths(),
    monthDays: [],
    deviationTime: 0,
    firstDay: 0,
    lastDay: 0,
  },
  action,
) {
  switch (action.type) {
  case 'ALL_DATA_REQUESTED':
    return {
      ...state,
      firstDay: 0,
      lastDay: 0,
      defaultStartTime: 0,
    };
  case 'TIMESHEET_DATA_SUCCEEDED':
    // eslint-disable-next-line no-case-declarations
    const monthDays = formatMonthDays(action.payload.monthDays);
    return {
      ...state,
      basePlannedTime: action.payload.basePlannedTime,
      workedTime: action.payload.workedTime,
      dayOffTime: action.payload.dayOffTime,
      defaultStartTime: action.payload.defaultStartTime,
      monthDays,
      firstDay: action.payload.monthDays[0].date,
      lastDay:
        action.payload.monthDays[action.payload.monthDays.length - 1].date,
      deviationTime: action.payload.deviationTime,
    };
  case 'SET_USERDATA_SUCCEDED':
    return {
      ...state,
      defaultStartTime: action.payload.startTime,
    };
  case 'UPDATE_ROW_TIME_SUCCEEDED':
    return {
      ...state,
      monthDays: updateRowTime(state.monthDays, action.payload),
    };
  case 'UPDATE_ROW_DEVIATION_TYPE':
    return {
      ...state,
      monthDays: updateRowDeviationType(state.monthDays, action.payload),
    };
  case 'UPDATE_USER_STATISTIC':
    return {
      ...state,
      deviationTime: updateDeviationTime(state.deviationTime, action.payload),
    };
  case 'RESET_TO_DEFAULT_TIME_REQUESTED':
    return {
      ...state,
      monthDays: resetToDefaultTime(state.monthDays, action.payload),
    };
  default:
    return state;
  }
}
