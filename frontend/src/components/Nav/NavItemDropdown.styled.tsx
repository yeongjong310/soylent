import styled from 'styled-components/macro';

interface StyledNavItemDropdownProp{
  isOpen: boolean;
}

export const StyledNavItemDropdown = styled.li<StyledNavItemDropdownProp>`
  .dropdown__item {
    &--list {
      background-color: ${({theme}) => theme.colors.white};
      padding-top: 20px;
      font-size: 0.8125rem;
      display: flex;
      flex-wrap: wrap;
      > li::not(::nth-last-child()) {
        flex: 50%;
      }
    }
    &--image:nth-child(2n + 1) {
      padding-right: 10px;
    }
    &--image:nth-child(2n) {
      padding-left: 10px;
    }
    &--text {
      flex: 100%;
      display: flex;
      flex-direction: column;
      > a {
        color: ${({theme}) => theme.text.main};
        font-weight: 700;
        margin-bottom: 13px;
      }
    }
  }

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

  @media ${({theme}) => theme.device.tablet2} {
    .dropdown__item {
      &--list {
        padding: 4rem 5rem;
        position: absolute;
        display: flex;
        left:0;
        right:0;
        top: 100%;

        .img-container::before {
        margin-top: 84.82759%;
      }
      }
      &--image:nth-child(n), 
      &--text {
        flex: 25%;
        padding: 0 0 0 2.5rem;
      }
      &--text {
        flex: 25%;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          width: 1px;
          height: 100%;
          background-color: ${({theme}) => theme.colors.gray.main};
          left: 1.25rem;
        }
      }
    }
    .dropdown__icon--plus {
      &::before {
        position: static;
      }
      &::after {
        transform: rotate(135deg);
        content: "";
        position: absolute;
        right: 0;
        top: 45%;
        right: -15px;
        margin-top: -3px;
        display: block;
        width: 6px;
        height: 6px;
        border-top: 1.5px solid;
        border-right: 1.5px solid;
        background: white;
      }
    }
  }
`;