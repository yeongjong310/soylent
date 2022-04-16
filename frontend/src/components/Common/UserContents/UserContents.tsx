import { ReactElement } from 'react';
import { ReactComponent as UserIcon } from 'assets/Icon/user.svg';
import { ReactComponent as CartIcon } from 'assets/Icon/cart.svg';
import { IconLink } from 'components/Common';
import { StyledUserContents } from './UserContents.styled';

export default function UserContents(): ReactElement {
  return (
    <StyledUserContents>
      <IconLink to="#">
        <UserIcon
          style={{ width: '20px', height: '20px', overflow: 'visible' }}
        />
      </IconLink>
      <IconLink as="a" role="button">
        <CartIcon
          style={{ width: '20px', height: '20px', overflow: 'visible' }}
        />
      </IconLink>
    </StyledUserContents>
  );
}