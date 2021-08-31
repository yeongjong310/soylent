import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';

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
    <li>
      <a role='button'>{text}</a>
      {
        <div className="dropdown">
          <div className="dropdown__menu_list--image">
            {
              dropdownIds?.imageIds.map(dropdownId => {
                if (dropdownContent) {
                  return (
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
            {
              dropdownIds?.textIds.map(dropdownId => {
                if (dropdownContent) {
                  return (
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
    </li>
  )
}
