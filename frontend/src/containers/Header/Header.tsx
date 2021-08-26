import React from 'react';

interface HeaderProps {
  className?: string,
  children: React.ReactNode
}

function Header ({ className, children, ...restProps }: HeaderProps) {
  return (
    <header 
      className={className}
      {...restProps}
      >
      {children}
    </header>
  );
}

export default Header;