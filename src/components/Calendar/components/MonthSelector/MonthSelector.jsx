/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React from 'react';
import MonthSelectorTypes from './MonthSelector.types';
import './MonthSelector.scss';
import { isItDisabled, needALock } from './MonthSelector.util';

/**
 * renders the months based on `Monthlist` prop
 * @param {number} SelectedYear - get the chosen year from `Calendar` state
 * @param {number} selectedMonth - get the chosen month from `Calendar` state
 * @param {number} monthList - it renders the list based on monthList
 * @param {function} handleClick - responsible for handling the clicks on year, month * buttons
 */
const MonthSelector = ({
  selectedYear, selectedMonth, monthList, handleClick,
}) => (
  <div className="month-selector">
    {
      monthList.map((month, i) => (
        <button
          type="button"
          className={
            `btn btn-xs btn-calendar btn-month btn-default ${isItDisabled(selectedYear, selectedMonth, i)}`
          }
          onClick={handleClick.bind(this, i, 'month')}
        >
          {needALock(selectedYear, i)
            ? (<i className="fa fa-lock" aria-hidden="true" />) : ''}
          {month}
        </button>
      ))
    }
  </div>
);

MonthSelector.propTypes = MonthSelectorTypes;

export default MonthSelector;
