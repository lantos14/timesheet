import styled from '@emotion/styled';

const Display = styled.td`
font-weight: ${({ string }) => (string === 'nincs megadva' ? 'unset' : 'bold')};
color: inherit;
font-style: ${({ string }) => (string === 'nincs megadva' ? 'italic' : 'unset')};
`;

// color ${({ string }) => (string === 'nincs megadva' ? '#e0e0e0' : '#FFF')};

export default Display;
