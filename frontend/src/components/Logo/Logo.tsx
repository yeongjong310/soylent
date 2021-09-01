import React from 'react';
import { ReactComponent as LogoSvg } from './img/logo.svg';

interface LogoProps {
  href: string,
  color: 'black' | 'white',
  width?: string,
}

function Logo({ href, width, color }: LogoProps) {
  return (
    <a href={href}>
      <LogoSvg 
        width={width} 
        fill={color === 'black' ? '#000000' : '#ffffff' } />
    </a>
  );
}

Logo.defaultProps = {
  href: '/',
  width: '100px',
}

export default Logo;