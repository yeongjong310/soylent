import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { StyledNavItem } from './NavItem.styled';
import { ReactComponent as ArrowSvg } from 'assets/Icon/arrow.svg';

interface Props {
  text: string;
  href: string;
}

export default function NavItem(
  { text, 
    href,
    ...restProps
  }: Props): ReactElement {
  return (
    <StyledNavItem
      {...restProps}
    >
      <Link 
        to={href}
        role='menuitem' 
        aria-label="navigation Link item"
        aria-haspopup="false"
      >
        {text}
        <span className="navitem__icon--arrow">
          <ArrowSvg />
        </span>
      </Link>
    </StyledNavItem>
  )
}
