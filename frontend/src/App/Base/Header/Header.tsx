import React, { useState } from 'react';
import useIsOverHeader from 'hooks/useIsOverHeader';
import { UserContents } from 'components/Common';
import { Nav, BurgerButton } from '../';
import { Logo } from 'components/Common';

import 'styled-components/macro';
import { StyledHeader } from './Header.styled';
import { LogoH1Container } from './Header.styled';

interface HeaderProps {
  className?: string;
}

function Header({ className, ...restProps }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { isOverHeader } = useIsOverHeader();

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <StyledHeader
      className={className}
      {...restProps}
      isOverHeader={isOverHeader}
    >
      <div className="header-wrapper">
        <Nav isOpen={isOpen} />
        <BurgerButton isOpen={isOpen} onClick={toggleIsOpen} />
        <LogoH1Container>
          <Logo color="black" />
        </LogoH1Container>
        <UserContents />
      </div>
    </StyledHeader>
  );
}

export default Header;
