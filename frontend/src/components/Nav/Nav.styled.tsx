import styled from 'styled-components/macro';

export const StyledNav = styled.nav`
  position: absolute;
  transform: translateY(-100%);
  display: none;
  width: 100%;
  left: 0;
  background: inherit;
  height: 100vh;
  overflow-y: auto;
  .nav-items {
    display:flex;
    flex-direction: column;
    margin: 0;
    > li {
      padding: 15px 20px;
      border-bottom: 1px solid ${({theme: { colors : { gray }}}) => gray.main};
      > a {
        font-weight: 500;
        display: flex;
        justify-content: space-between;
        color: ${({ theme }) => theme.text.main};
      }
    }
  }

  &.active {
    display: block;
    top: 100%;
    transform: translateY(0);
  }
`