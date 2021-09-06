import React from 'react';
import { ReactComponent as LogoSvg } from './img/logo.svg';
import { StyledLogo } from './Logo.styled';
import { theme } from '../../styles/theme';

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
        fill={color === 'black' ? theme.text.main : theme.colors.white } />
    </StyledLogo>
  );
}

Logo.defaultProps = {
  href: '/',
  width: '100%',
}

export default Logo;