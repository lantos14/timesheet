/* eslint-disable max-len */
import React from 'react';
import YearSelectorTypes from './YearSelector.types';
/**
 * renders the months based on `yearList` prop
 * @param {number} SelectedYear - get the chosen year from `Calendar` state
 * @param {number[]} yearList - static array
 * which contains the year before the actual year,
 * the actual year, and the year after it
 * @param {function} handleClick - received from `Calendar` component,
 * responsible for handling the clicks on year, month buttons
 */
const YearSelector = ({
  selectedYear, yearList, handleClick,
}) => (
  <div className="year-selector">
    {
      yearList.map(year => (
        <button
          type="button"
          className={
            `btn btn-xs btn-default btn-calendar btn-year ${selectedYear === year ? 'btn-primary' : null}`
          }
          onClick={handleClick.bind(this, year, 'year')}
        >
          {year}
        </button>
      ))
    }
  </div>

);

YearSelector.propTypes = YearSelectorTypes;

export default YearSelector;
