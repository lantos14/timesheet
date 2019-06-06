// Core dependencies
import moment from 'moment';
import { timestampToDate } from '../../../../utils/utils';

// eslint-disable-next-line import/prefer-default-export
export const getDayName = (timestamp) => {
  const date = timestampToDate(timestamp);
  return moment.weekdays(date.getDay());
};
