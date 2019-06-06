/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { css, jsx } from '@emotion/core';
import PrintSheetTypes from './PrintSheet.types';

const style = {
  timesheetForm: css`
    position: absolute;
    right: 0;
  `,
};
/**
 * renders the Print button.
 * Its basically a form with an action pointing to the print endpoint.
 * It generates the actually selected month's data via pdf
 * @param {number} selectedYear - the component needs
 * the actual year and month to start the API request
 * @param {number} actualMonth - the component needs
 * the actual year and month to start the API request
 */
const PrintSheet = ({ selectedYear, actualMonth }) => {
  const printUrl = `https://dev.profile.niif.hu/timesheet/print/${selectedYear}/${actualMonth + 1}`;
  return (
    <form
      className="timesheet-form"
      css={style.timesheetForm}
      action={printUrl}
    >
      <div className="pull-right">
        <button id="printit" className="btn btn-success btn-sm" type="submit">
          <i className="fa fa-print" aria-hidden="true" />
          Nyomtatás
        </button>
      </div>
    </form>
  );
};

PrintSheet.propTypes = PrintSheetTypes;

export default PrintSheet;
