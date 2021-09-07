import styled from 'styled-components/macro';

export const StyledNavDropdownItem = styled.li`
  .dropdown__icon--plus {
    position: relative;
    &::after,
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      right: 50%;
      background-color: ${({theme}) => theme.text.main};
      width: 0.875rem;
      height: 0.125rem;
    }
    &::before {
      transform: rotate(90deg);
    }
  }
  @media ${({theme}) => theme.device.tablet1} {
    :hover > .dropdown__item-wrapper {
      display: block;
    }
    .dropdown__item-wrapper {
      display: none;
      width: 100%;
    }
  }
`;