import styled from '@emotion/styled';

// eslint-disable-next-line import/prefer-default-export
export const StyledUserdata = styled.div`
  background-color: ${props => (props.selectedTimeIsPassed ? '#cbd0d3' : '#3c8cbc')};
  color: ${props => (props.selectedTimeIsPassed ? 'unset' : 'white')};
  position: relative;
`;
