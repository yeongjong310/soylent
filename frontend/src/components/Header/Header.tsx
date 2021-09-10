import React, { useState } from 'react';
import { useScroll } from 'hooks/useScroll';
import { BurgerButton, Logo, Nav, UserContents } from 'components';

import 'styled-components/macro';
import { StyledHeader } from './Header.styled';
import { LogoH1Container } from './Header.styled';

interface HeaderProps {
  className?: string,
}

export default function Header ({ className, ...restProps }: HeaderProps) {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden"
    }
  }

  const isOverHeader = () => scrollY > 34;

  return (
    <StyledHeader
      className={className}
      {...restProps}
      isOverHeader={isOverHeader}
    > 
      <div className="header-wrapper">
        <Nav isOpen={isOpen}/>
        <BurgerButton isOpen={isOpen} onClick={toggleIsOpen}/>
        <LogoH1Container>
          <Logo color='black' />
        </LogoH1Container>
        <UserContents />
      </div>
    </StyledHeader>
  );
}