import {
  func,
  number,
  string,
  arrayOf,
} from 'prop-types';

const CalendarTypes = {
  // actions
  fetchAllData: func.isRequired,
  yearSelected: func.isRequired,
  monthSelected: func.isRequired,
  // calendarStore props
  selectedYear: number.isRequired,
  selectedMonth: number.isRequired,
  yearList: arrayOf(number),
  monthList: arrayOf(string),
};

export default CalendarTypes;
