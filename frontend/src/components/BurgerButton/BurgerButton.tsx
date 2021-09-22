import React from 'react';
import { BurgerButtonProps, StyledBurgerButton } from './BurgerButton.styled';


export default function BurgerButton({ isOpen, onClick }: BurgerButtonProps) {
  return (
    <StyledBurgerButton
      isOpen={isOpen}
      onClick={ onClick }
    >
      <div></div>
    </StyledBurgerButton>
  )
}