import React, { useState, useRef } from 'react';
import { useScroll } from 'hooks/useScroll';
import { BurgerButton, Logo, Nav, UserContents } from 'components';
import { StyledHeader } from './Header.styled';
import Styled from 'styled-components/macro';

interface HeaderProps {
  className?: string,
}

export default function Header ({ className, ...restProps }: HeaderProps) {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  // const $header = useRef();

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  const isOverHeader = () => scrollY > 34;

  return (
    <StyledHeader
      className={className}
      {...restProps}
      isOverHeader={isOverHeader}
    > 
      <div className="header-wrapper">
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
      </div>
    </StyledHeader>
  );
}