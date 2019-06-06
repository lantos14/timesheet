// Core dependencies
// eslint-disable-next-line no-unused-vars
import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import style from './style';

const TableTitles = () => (
  <thead>
    <tr>
      <th css={style.tableHeader} colSpan="2">
        Dátum
      </th>
      <th css={style.tableHeader}>Tervezett&nbsp;munkaidő</th>
      <th css={style.tableHeader}>Érkezés</th>
      <th css={style.tableHeader}>Távozás</th>
      <th css={style.tableHeader} colSpan="1">
        Ledolgozott&nbsp;órák
      </th>
      <th css={style.tableHeader}>Tervezettől való eltérés</th>
      {/* <th css={style.tableHeader}> Túlóra elrendelése</th> */}
      <th hidden />
    </tr>
  </thead>
);

export default TableTitles;
