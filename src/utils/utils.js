import moment from 'moment';
/**
 * turns php timestamp to js timestamp
 * @param {number} timestamp - 10 digit php timestamp
 * @returns {number} js timestamp
 */
export const timestampToDate = timestamp => new Date(timestamp * 1000);
/**
 * turns js timestamp to php timestamp
 * @param {number} timestamp - js timestamp
 * @returns {number} php timestamp
 */
export const JsTimestampToPhpTimestamp = timestamp => new Date(timestamp / 1000);
/**
 * accepts a date string and converts it to php timestamp
 * @param {string} timestamp - date string in YY.MM.DD format
 * @returns {number} php timestamp
 */
export const stringToPhpTimeStamp = (timestamp) => {
  if (Number.isInteger(timestamp)) {
    return timestamp;
  }
  const jsTs = new Date(timestamp).getTime();
  return jsTs / 1000;
};
/**
 * Converts php timestamp to YY.MM.DD string format
 * @param {number} phpTs - 10 digit php timestamp
 * @returns {string} YY.MM.DD date format
 */
export const formatPhpTimestamp = (phpTs) => {
  if (!phpTs) { return ''; }
  const jsTs = timestampToDate(phpTs);
  const year = jsTs.getFullYear();
  const month = jsTs.getMonth() + 1 < 10 ? `0${jsTs.getMonth() + 1}` : jsTs.getMonth() + 1;
  const day = jsTs.getDate() < 10 ? `0${jsTs.getDate()}` : jsTs.getDate();

  return `${year}.${month}.${day}`;
};

export const dateToString = (timestamp) => {
  const jsTs = timestampToDate(timestamp);
  const year = jsTs.getFullYear();
  const month = jsTs.getMonth() + 1 < 10 ? `0${jsTs.getMonth() + 1}` : jsTs.getMonth() + 1;
  const day = jsTs.getDate() < 10 ? `0${jsTs.getDate()}` : jsTs.getDate();

  return `${year}.${month}.${day}`;
};
/**
 * converts HH:MM time format to minutes
 * @param {string} stringClock - HH:MM time format
 * @returns {number} input time in minutes
 */
export const stringClockToMin = (stringClock) => {
  const input = stringClock;
  const [hour, min] = input.split(':');
  const result = parseInt(hour, 10) * 60 + parseInt(min, 10);
  return result;
};

export const getMonthName = (monthIndex) => {
  moment.locale('hu');
  return moment.months(monthIndex);
};

export const isCurrentDay = (timestamp) => {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

  const dateNow = `${year}.${month}.${day}`;

  return dateNow === dateToString(timestamp);
};

export const getMonths = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  return new Array(12)
    .fill()
    .map((item, index) => ({
      title: `${year}/${index + 1}`,
      name: getMonthName(index),
      // eslint-disable-next-line no-unneeded-ternary
      actual: month === index ? true : false,
    }));
};
/**
 * converts a sum of minutes into HH:MM string format
 * @param {number} number - time in minutes
 * @returns {string} - time in HH:MM format
 */
export const minToHour = (number) => {
  if (number !== 0 && !number) {
    return '';
  }

  const formattedNumber = Math.abs(number);
  const hours = formattedNumber / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes) < 10 ? `0${Math.round(minutes)}` : Math.round(minutes);

  return `${rhours}:${rminutes}`;
};

export const getPlannedWorkTitle = (defaultDateTitle, defaultStart, defaultEnd) => {
  if (defaultDateTitle !== 'munkanap') {
    return defaultDateTitle;
  }
  return `${minToHour(defaultStart)}-${minToHour(defaultEnd)}`;
};

// eslint-disable-next-line consistent-return
export const decideSign = (worked) => {
  // console.log(worked);
  const sign = Math.sign(worked);

  if (sign === 0 || sign === 1) {
    return null;
  }

  if (sign === -1) {
    return '-';
  }
};

// eslint-disable-next-line consistent-return
export const getDeviationTitle = (index) => {
  // eslint-disable-next-line default-case
  switch (index) {
  case -1:
    return '';
  case 0:
    return 'Belföldi kiküldetés';
  case 1:
    return 'Külföldi kiküldetés';
  case 2:
    return 'Táppénz';
  }
};
