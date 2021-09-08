import styled from 'styled-components/macro';

interface StyledNavItemDropdownProp{
  isOpen: boolean;
}

export const StyledNavItemDropdown = styled.li<StyledNavItemDropdownProp>`
  overflow: hidden;
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

  .dropdown__item-wrapper {
    padding-top: 20px;
    font-size: 0.8125rem;
    & .dropdown__item--item {
      color: ${({theme}) => theme.text.main};
      font-weight: 700;
      margin-bottom: 1em;
    }
  }

  .dropdown__item--images {
    display: flex;
    flex-wrap: wrap;
    > li:nth-child(2n + 1) {
      padding-right: 10px;
    }
    > li:nth-child(2n) {
      padding-left: 10px;
    }
  }

  .dropdown__item--texts {
    display: flex;
    flex-direction: column;
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