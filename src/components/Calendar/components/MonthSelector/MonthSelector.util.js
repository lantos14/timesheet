const moment = require('moment');

const momentYear = moment(new Date()).year();
const momentMonth = moment(new Date()).month();

export const isItDisabled = (selectedYear, actualMonth = null, monthIndex = null) => {
  let result = '';

  if (selectedYear < momentYear) {
    result += 'disabled';
  }

  if (parseInt(selectedYear, 10) === momentYear) {
    if (monthIndex < momentMonth) {
      result += 'disabled';
    }
  }

  if (actualMonth === monthIndex) {
    result = ' btn-primary';
  }
  return result;
};

export const needALock = (selectedYear, monthIndex) => {
  let result = false;
  if (selectedYear < momentYear) {
    result = true;
  }

  if (selectedYear > momentYear) {
    return result;
  }

  if (monthIndex < momentMonth) {
    result = true;
  }

  return result;
};
