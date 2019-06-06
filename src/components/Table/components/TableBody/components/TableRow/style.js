import { css } from '@emotion/core';

const style = {
  cell: css`
    display:table-cell;
    vertical-align:middle !important;
  `,
  row: css`
    & > td {
      display: table-cell;
      vertical-align: middle !important;
    }
  `,
};

export default style;
