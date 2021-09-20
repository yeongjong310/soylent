import { Card } from 'components';
import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledNavItemDropdown } from './NavItemDropdown.styled'
import { dropdownItemType } from './navEntities';

interface dropdownNavItemType {
  text: string,
  href?: string,
  dropdownIds?: {
    imageIds: string[],
    textIds: string[]
  },
  dropdownContent?: {
    [key: string]: dropdownItemType
  }
}

export default function NavItemDropdown({
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
    setIsOpen(!isOpen);
  }

  return (
    <StyledNavItemDropdown isOpen={isOpen}>
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
        <ul className='dropdown__item--list'>
          { 
            dropdownIds?.imageIds.map(dropdownId => {
              if (dropdownContent) {
                return (
                  <Card
                    width={50}
                    ratio={100}
                    key={dropdownContent?.[dropdownId].text}
                    href={dropdownContent?.[dropdownId].href}
                    src={dropdownContent?.[dropdownId]?.src}
                    title={dropdownContent?.[dropdownId].text}
                    description={dropdownContent?.[dropdownId]?.description}
                    className='dropdown__item--image'
                  />
                )
              }
            })
          }
          <li className='dropdown__item--text'>
            {
              dropdownIds?.textIds.map(dropdownId => {
                if (dropdownContent) {
                  return (
                    <Link
                      key={dropdownContent?.[dropdownId].text}
                      to={dropdownContent?.[dropdownId].href}>
                      {dropdownContent?.[dropdownId].text}
                    </Link>
                  )
                }
              })
            }
          </li>
        </ul>
      }
    </StyledNavItemDropdown>
  )
}
