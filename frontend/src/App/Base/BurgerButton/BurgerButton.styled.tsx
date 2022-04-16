import styled from 'styled-components/macro'

export interface BurgerButtonProps {
  isOpen: boolean
  onClick?: () => void
}

export const StyledBurgerButton = styled.button<BurgerButtonProps>`
  position: relative;
  cursor: pointer;
  width: 22px;
  height: 18px;
  > div {
    &,
    &::before,
    &::after {
      position: absolute;
      left: 0;
      right: 0;
      content: '';
      height: 2px;
      background-color: #212322;
      transition: all 0.3s;
    }
    & {
      background-color: ${({ isOpen }) => (isOpen ? 'transparent' : '#212322')};
    }
    &::after {
      top: ${({ isOpen }) => (isOpen ? '' : '8px')};
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg);' : '')};
    }
    &::before {
      top: ${({ isOpen }) => (isOpen ? '' : '-8px')};
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg);' : '')};
    }
  }
  @media ${({ theme }) => theme.device.tablet2} {
    display: none;
  }
`
