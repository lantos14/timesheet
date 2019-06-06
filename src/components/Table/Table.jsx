// Core dependencies
// eslint-disable-next-line no-unused-vars
import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

// Child components
import TableTitles from './components/TableTitles/TableTitles';
import TableBody from './components/TableBody/TableBody';

// Style
import style from './style';

const Table = () => (
  <div className="main-sheet" css={style.mainSheet}>
    <table
      id="timesheet-table"
      cellPadding="5"
      cellSpacing="0"
      className="table table-striped table-bordered table-hover table-actions dataTable"
      border="0"
      width="100%"
    >
      <TableTitles />
      <TableBody />
    </table>
  </div>
);

export default Table;
