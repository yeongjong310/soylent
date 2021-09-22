import React, { ReactElement, useState } from 'react';
import { StyledNav } from './Nav.styled';
import { navItems, dropdownContents } from './navEntities';
import { NavItem, NavItemDropdown } from 'components';
import { classNames } from 'utils/classNames';

interface NavProps {
  className: string;
  style?: object;
  isOpen: boolean;
}

export default function Nav({
  className,
  style,
  isOpen,
  ...restProps
}: NavProps): ReactElement {
  const initDropdownState = navItems
    .filter(({ dropdownIds }) => dropdownIds)
    .reduce(
      (acc: { [key: string]: boolean}, {id}) => {
        acc[id] = false;
        return acc;
      }, {});

  const [dropdowns, setDropdowns] = useState(initDropdownState);

  const handleDropdownState = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    setDropdowns(
      Object.keys(dropdowns).reduce(
        (acc: { [key: string]: boolean}, id) => {
          if (id === (e.target as Element).id) {
            acc[id] = !dropdowns[id];
          } else {
            acc[id] = false;
          }

          return acc;
        }, {}));
  };

  return (
    <>
      <StyledNav
        style={style}
        className={classNames(className, 'active')}
        isOpen={isOpen}
        {...restProps}
      >
        <ul role="menubar" className="nav-items">
          {navItems.map(({ id, text, href, dropdownIds }) => {
            return dropdownIds ? (
              <NavItemDropdown
                key={id}
                id={id}
                text={text}
                href={href}
                dropdownIds={dropdownIds}
                dropdownContent={dropdownContents[id]}
                isOpen={dropdowns[id]}
                onClick={handleDropdownState}
              />
            ) : (
              <NavItem key={id} text={text} href={href!} />
            );
          })}
        </ul>
      </StyledNav>
    </>
  );
}

Nav.defaultProps = {
  className: '',
};
