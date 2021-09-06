import styled from 'styled-components/macro';

export const StyledBurgerButton = styled.button`
  position: relative;
  curser: pointer;
  width: 22px;
  height: 18px;
  > div {
    &,
    &::before,
    &::after {
      position: absolute;
      left: 0;
      right: 0;
      display: inherit;
      content:"";
      height: 2px;
      background-color: #212322;
    }
    &::after {
      top: 8px;
    }
    &::before {
      top: -8px;
    }
  }
`;