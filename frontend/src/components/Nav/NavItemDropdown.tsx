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
    console.log(e.code);
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
        <div className='dropdown__item-wrapper'>
          <ul className='dropdown__item--images'>
            { 
              dropdownIds?.imageIds.map(dropdownId => {
                if (dropdownContent) {
                  return (
                    <Card
                      href={dropdownContent?.[dropdownId].href}
                      src={dropdownContent?.[dropdownId]?.src}
                      title={dropdownContent?.[dropdownId].text}
                      description={dropdownContent?.[dropdownId]?.description}
                    />
                  )
                }
              })
            }
          </ul>
          <ul className='dropdown__item--texts'>
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
          </ul>
        </div>
      }
    </StyledNavItemDropdown>
  )
}
