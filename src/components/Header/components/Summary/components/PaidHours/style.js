import styled from '@emotion/styled';
import { decidePaidHoursColor } from './utils';

// eslint-disable-next-line import/prefer-default-export
export const PaidTime = styled.span`
  font-weight: 700;
  color: ${({ workedTime, paidTime }) => decidePaidHoursColor(workedTime, paidTime)};
`;
