import styled from 'styled-components/macro';
interface styledHeaderType {
  isOverHeader: boolean
}
export const StyledHeader = styled.header<styledHeaderType>`
  /* position: relative; */
  ${({ isOverHeader }) => {
    return !isOverHeader
    ? 'position: relative;' : 
    `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    ` 
  }} 
  
  z-index: 100;
  height: 3.75rem;
  background: ${({theme}) => theme.colors.white };
  .header-wrapper {
    align-items: center;
    justify-content: space-between;
    display: flex;
    height: inherit;
    padding: 0 1.25rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: inherit;
    @media ${({theme}) => theme.device.tablet2} {
      paddint: 0 80px;
    }
  } 
`

export const LogoH1Container = styled.h1`
  position:absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  max-width: 4.75rem;
  margin: 0;
  @media screen and (min-width:992px) {
    position: static;
    transform: none;
    order: -1;
  }
`