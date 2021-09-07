import React from 'react';
import { StyledHeader } from './Header.styled';

interface HeaderProps {
  className?: string,
  children: React.ReactNode
}

export default function Header ({ className, children, ...restProps }: HeaderProps) {
  return (
    <StyledHeader
      className={className}
      {...restProps}
      >
      {children}
    </StyledHeader>
  );
}