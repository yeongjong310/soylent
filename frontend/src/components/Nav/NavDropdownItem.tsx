import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledNavDropdownItem } from './NavDropdownItem.styled'

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
  text,
  dropdownIds,
  dropdownContent
}: dropdownNavItemType): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const toggleisOpenStateByClick:React.MouseEventHandler<HTMLAnchorElement> = () => {
    setIsOpen(!isOpen);
  }

  const toggleisOpenStateByKeyUp:React.KeyboardEventHandler<HTMLAnchorElement> = (e) => {
    if (e.code !== 'Space' && e.code !== 'Enter') return;
    console.log(e.code);
    setIsOpen(!isOpen);
  }

  return (
    <StyledNavDropdownItem>
      <a 
        tabIndex={0}
        className='dropdown__title' 
        onClick={toggleisOpenStateByClick}
        onKeyUp={toggleisOpenStateByKeyUp}
        role='menuitem' 
        aria-label="navigation dropdown item"
        aria-haspopup="true"
      >
        {text}
        <span className="dropdown__icon--plus"></span>
      </a>
      {isOpen && 
        <div className='dropdown__item-wrapper'>
          <div className='dropdown__item--images'>
            { 
              dropdownIds?.imageIds.map(dropdownId => {
                if (dropdownContent) {
                  return (
                    <Link
                      to={dropdownContent?.[dropdownId].href}
                      className='dropdown__item--text'>
                      {dropdownContent?.[dropdownId].text}
                      <span className="navitem-icon"></span>
                    </Link>
                  )
                }
              })
            }
          </div>
          <div className='dropdown__item--texts'>
            {
              dropdownIds?.textIds.map(dropdownId => {
                if (dropdownContent) {
                  return (
                    <Link
                      to={dropdownContent?.[dropdownId].href}
                      className='dropdown__item--item'>
                      {dropdownContent?.[dropdownId].text}
                    </Link>
                  )
                }
              })
            }
          </div>
        </div>
      }
    </StyledNavDropdownItem>
  )
}
