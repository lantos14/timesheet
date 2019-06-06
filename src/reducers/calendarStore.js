import moment from 'moment';
import { needALock } from '../components/Calendar/components/MonthSelector/MonthSelector.util';

const actualYearMoment = moment(new Date()).year();
const actualMonthMoment = moment(new Date()).month();

export default function calendarStore(state = {
  // year related data
  selectedYear: actualYearMoment,
  yearList: [actualYearMoment - 1, actualYearMoment, actualYearMoment + 1],
  isActualYearSelected: true,
  // month related data
  selectedMonth: actualMonthMoment,
  monthList: moment.months(),
  isActualMonthSelected: true,
  selectedTimeIsPassed: false,
}, action) {
  switch (action.type) {
  case 'YEAR_SELECT_REQUESTED':
    return {
      ...state,
      selectedYear: action.payload,
      isActualYearSelected: action.payload === actualYearMoment,
      selectedTimeIsPassed: needALock(action.payload, state.selectedMonth),
    };
  case 'MONTH_SELECT_REQUESTED':
    return {
      ...state,
      selectedMonth: action.payload,
      isActualMonthSelected: action.payload === actualMonthMoment,
      selectedTimeIsPassed: needALock(state.selectedYear, action.payload),
    };
  default:
    return state;
  }
}
