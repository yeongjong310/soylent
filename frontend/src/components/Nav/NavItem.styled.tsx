import styled from 'styled-components/macro';

export const StyledNavItem = styled.li`
  > a {
    color: black;
  }
  @media ${({theme}) => theme.device.tablet2} {
    .navitem__icon--arrow {
      display: none;
    }
  }
`