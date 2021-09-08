import styled from 'styled-components/macro';

export const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  position: sticky;
  left: 0;
  right: 0;
  justify-content: space-between;
  padding: 0 1.25rem;
  align-items: center;
  height: 3.75rem;
  background: ${({theme}) => theme.colors.white };
`