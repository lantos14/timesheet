import { css } from '@emotion/core';

const style = {
  spanWrapper: css`
    margin: 0;
    padding: 0;
    border: 0;
  `,
  spanButton: css`
    height: 22px;
    border-left: 0;
  `,
  inputWrapper: css`
    display:flex;
    justify-content:center;
  `,
  spanResetButton: css`
    height: 22px;
    border-left: 0;
    color:red;

    &:hover{
      color:white;
      background-color:red;
    }

    &:disabled{
      color:red;
      background-color:unset;
    }
  `,
};

export default style;
