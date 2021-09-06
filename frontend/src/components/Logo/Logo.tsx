import React from 'react';
import { ReactComponent as LogoSvg } from './img/logo.svg';
import { StyledLogo } from './Logo.styled';

interface LogoProps {
  href: string,
  color: 'black' | 'white',
  width?: string,
}

function Logo({ href, width, color }: LogoProps) {
  return (
    <StyledLogo href={href}>
      <LogoSvg 
        width={width} 
        fill={color === 'black' ? '#000000' : '#ffffff' } />
    </StyledLogo>
  );
}

Logo.defaultProps = {
  href: '/',
  width: '100%',
}

export default Logo;