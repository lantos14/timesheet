// Core dependencies
import styled from '@emotion/styled';

// Local utils
import { decideDeviationColor } from './utils';

// eslint-disable-next-line import/prefer-default-export
export const DeviationTime = styled.span`
  font-weight: 700;
  color: ${({ deviationTime }) => decideDeviationColor(deviationTime)};
`;
