import React, { useState } from 'react';
import { BurgerButton, Logo, Nav, UserContents } from 'components';
import { StyledHeader } from './Header.styled';
import Styled from 'styled-components/macro';

interface HeaderProps {
  className?: string,
}

export default function Header ({ className, ...restProps }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <StyledHeader
      className={className}
      {...restProps}
    >
      {isOpen ? <Nav /> : ''}
      <BurgerButton isOpen={isOpen} onClick={toggleIsOpen}/>
      <h1
        css={`
          position:absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          max-width: 4.75rem;
          margin: 0;
        `}
      >
        <Logo color='black' />
      </h1>
      <UserContents />
    </StyledHeader>
  );
}