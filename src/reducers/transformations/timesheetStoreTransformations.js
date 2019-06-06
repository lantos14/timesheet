import cloneDeep from 'lodash.clonedeep';
import { isCurrentDay } from '../../utils/utils';

export const formatMonthDays = monthDays => monthDays
  .map(monthDay => ({
    ...monthDay,
    currentDay: isCurrentDay(monthDay.date),
  }));

export const updateDeviationTime = (deviation, { stepDifference }) => deviation + stepDifference;

export const updateRowTime = (monthDays, { type, id, minute }) => {
  const newMonthDays = cloneDeep(monthDays);
  newMonthDays[id][type] = minute;

  return newMonthDays;
};

export const updateRowDeviationType = (monthDays, { id, deviationType }) => {
  const newMonthDays = cloneDeep(monthDays);
  newMonthDays[id].deviationType = deviationType;

  return newMonthDays;
};

export const resetToDefaultTime = (monthDays, { id }) => {
  const newMonthDays = cloneDeep(monthDays);
  newMonthDays[id].workStart = newMonthDays[id].defaultStart;
  newMonthDays[id].workEnd = newMonthDays[id].defaultEnd;

  return newMonthDays;
};
