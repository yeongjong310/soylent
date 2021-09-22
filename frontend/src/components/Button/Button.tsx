import React, { ReactElement, ReactNode, useState } from 'react';
import { ArrowIcon, StyledButton, TextBox } from './Button.styled';

export interface Props {
  children?: ReactNode;
  text?: string;
  width?: number;
  type?: 'primary' | 'secondary';
  arrowanimation?: boolean;
  shrinkanimation?: boolean;
  coloranimation?: boolean;
  upper?: boolean;
  wide?: boolean;
}

export default function Button({
  text,
  children,
  width,
  type,
  arrowanimation,
  shrinkanimation,
  coloranimation,
  upper,
  wide,
}: Props): ReactElement {
  const [hover, setHover] = useState<boolean>(false);
  const enterHandler = () => setHover(true);
  const leaveHandler = () => setHover(false);

  return (
    <StyledButton
      to={'#'}
      $width={width}
      $type={type}
      onMouseEnter={enterHandler}
      onMouseLeave={leaveHandler}
      onFocus={enterHandler}
      onBlur={leaveHandler}
      $ishover={hover}
      $arrowanimation={arrowanimation}
      $shrinkanimation={shrinkanimation}
      $coloranimation={coloranimation}
      $upper={upper}
    >
      <ArrowIcon $ishover={hover} />
      <TextBox>{children ?? text}</TextBox>
    </StyledButton>
  );
}

Button.defaultProps = {
  type: 'primary',
};
