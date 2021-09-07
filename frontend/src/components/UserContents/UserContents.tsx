import React, { ReactElement } from 'react'
import { ReactComponent as UserIcon } from 'assets/Icon/userIcon.svg';
import { ReactComponent as CartIcon } from 'assets/Icon/cartIcon.svg';
import { IconLink } from 'components'
import { StyledUserContents } from './UserContents.styled';

interface Props {
  
}

export default function UserContents({}: Props): ReactElement {
  return (
    <StyledUserContents>
      <IconLink to='#'>
        <UserIcon style={{width: '20px', height: '20px', overflow: 'visible'}}/> 
      </IconLink>
      <IconLink as='a' role='button'>
        <CartIcon style={{width: '20px', height: '20px', overflow: 'visible'}}/> 
      </IconLink>
    </StyledUserContents>
  )
}
