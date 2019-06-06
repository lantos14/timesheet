// Core dependencies
import styled from '@emotion/styled';
import { css } from '@emotion/core';

// Local utils
import { decideColor } from './utils';

const style = {
  td: css`
    vertical-align: middle !important;
  `,
};

// eslint-disable-next-line import/prefer-default-export
export const HoursWork = styled.span`
  color: ${({ minWork, workTime }) => decideColor(minWork, workTime)};
`;

export default style;
