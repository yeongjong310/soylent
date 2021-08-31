import React, { ReactElement, ReactNode, ComponentType } from 'react';
import { NavLink, Link } from 'react-router-dom';

interface dropdownContentProp {
  text: string;
  href: string;
}

interface dropdownNavItemType {
  text: string,
  href?: string,
  dropdownIds?: {
    imageIds: string[],
    textIds: string[]
  },
  dropdownContent?: {
    [key: string]: dropdownContentProp
  }
}

export default function DropdownItem({ 
    href, 
    text, 
    dropdownIds,
    dropdownContent
  }: dropdownNavItemType): ReactElement {
  return (
    <>
      <h2>
        <button>{text}</button>
      </h2>
      {
        href 
        ? <NavLink to={href}>{text}</NavLink> // href={href!}
        : <div className="dropdown">
            <div className="dropdown__menu_list--image">
              {
                dropdownIds?.imageIds.map(dropdownId => {
                  if (dropdownContent) {
                    return(
                      <Link 
                        to={dropdownContent?.[dropdownId].href} 
                        className="dropdown__menu--item">
                          {dropdownContent?.[dropdownId].text}
                      </Link>
                    )
                  }
                })
              }
            </div>
            <div className="dropdown__menu_list--text">
              {/* {
                dropdownIds?.textIds.map(dropdownId=> {
                  return(
                    <Link to={dropdownId[navItemId][subMenuId].href} className="dropdown__menu--item">{ subMenu[menuId][subMenuId].text }</Link>
                  )
                })
              } */}
              {
                dropdownIds?.textIds.map(dropdownId => {
                  if (dropdownContent) {
                    return(
                      <Link 
                        to={dropdownContent?.[dropdownId].href} 
                        className="dropdown__menu--item">
                          {dropdownContent?.[dropdownId].text}
                      </Link>
                    )
                  }
                })
              }
            </div>
          </div>
      }
    </>
  )
}
