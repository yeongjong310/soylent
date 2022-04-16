import styled from 'styled-components/macro';

export const StyledNav = styled.nav<{isOpen: boolean}>`
  position: absolute;
  transform: translateY(-100%);
  display: ${({isOpen}) => isOpen ? 'block' : 'none'};
  top: ${({isOpen}) => isOpen ? '100%' : 'none'};
  transform: ${({isOpen}) => isOpen ? 'translateY(0)' : 'none'};
  width: 100%;
  left: 0;
  background: inherit;
  height: calc(100vh - 94px);
  overflow-y: auto;
  .nav-items {
    user-select: none;
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
  @media ${({theme}) => theme.device.tablet2} {
    width: auto;
    display: block;
    position: static;
    transform: none;
    height: auto;
    .nav-items {
      flex-direction: row;
    }
  }
`