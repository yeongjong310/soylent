import React, { ReactElement } from 'react';
import { StyledNav } from './Nav.styled';
import { navItems, dropdownContents } from './navEntities';
import NavItem from './NavItem';
import NavDropdownItem from './NavDropdownItem';
import { classNames } from 'utils/classNames';
interface NavProps {
  className: string,
  style?: object
}

export default function Nav({ className, style, ...restProps }: NavProps): ReactElement {

  return (
    <>
      {/* <SkipToContent /> */}
      <StyledNav
        style = {style}
        className={classNames(className, 'active')}
        {...restProps}
      >
        <ul role="menubar" className="nav-items">
          {navItems.map(({ id, text, href, dropdownIds }) => { 
              return ( 
                dropdownIds 
                ? (
                  <NavDropdownItem
                    key={id}
                    text={text} 
                    href={href}
                    dropdownIds={dropdownIds}
                    dropdownContent={dropdownContents[id]} />
                )
                : <NavItem  text={text} href={href!} />
              )}
            )}
        </ul>
      </StyledNav>
    </>
  )
}

Nav.defaultProps = {
  className: '',
}