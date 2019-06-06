import { css } from '@emotion/core';

const style = {
  calendar: css`
    display: flex;
    position: relative;
    margin-bottom: 10px;
    justify-content: flex-start;
    padding-right: 100px;
    
    .btn-primary {
      color: white;
    }

    div {
      margin-left: 3px;
    }
  `,
  faCalendar: css`
  padding: 3px;
  `,
};

export default style;
