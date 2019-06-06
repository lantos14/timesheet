import { string, bool } from 'prop-types';

const DateFieldTypes = {
  day: string.isRequired,
  dayName: string.isRequired,
  currentDay: bool.isRequired,
};

export default DateFieldTypes;
