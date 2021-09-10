import React, { ReactElement, ReactNode, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  children?: ReactNode;
  text?: string;
  width?: number;
  type?: 'primary' | 'secondary';
  arrowanimation?: string;
  shrinkanimation?: string;
  coloranimation?: string;
  upper?: string;
  wide?: boolean;
}

interface StyledButtonProps {
  $width?: Props['width'];
  $type?: Props['type'];
  arrowanimation?: string;
  shrinkanimation?: string;
  coloranimation?: string;
  upper?: string;
  wide?: boolean;
  ishover: string;
}

type StyledArrowIconProps = Pick<StyledButtonProps, 'ishover'>;

const StyledButton = styled(Link)<StyledButtonProps>`
  position: relative;
  display: block;
  color: black;
  border-radius: 0;
  text-align: ${({ arrowanimation }) => (arrowanimation ? 'left' : 'center')};
  width: ${({ $width = '200px' }) => $width};
  height: 55px;
  font-size: 1rem;
  font-weight: 500;
  background-color: white;
  border: none;
  cursor: pointer;
  padding: 0 20px;
  letter-spacing: calc(1rem * 0.15);
  ${({ upper }) => (upper ? 'text-transform: uppercase;' : '')}
  ${({ wide }) => (wide ? 'text-transform: uppercase;' : '')}
  ${({ coloranimation, ishover, theme }) => `
    ${coloranimation ? 'transition: color 0.3s;' : ''}
    ${coloranimation && ishover === 'true' ? `color: ${theme.color.green};` : ''}
  `}
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    ${({ ishover, shrinkanimation }) => {
      if (ishover && shrinkanimation)
        return `
    left: 5px;
    top: 5px;
    right: 5px;
    bottom: 5px;
      `;
    }}
    border: 2px solid ${({theme}) => theme.text.main};
    transition: top 0.3s, left 0.3s, right 0.3s, bottom 0.3s;
  }
`;

const ArrowIcon = styled.span<StyledArrowIconProps>`
  position: absolute;
  right: 20px;
  top: 50%;
  height: 100%;
  ::before {
    content: '';
    position: absolute;
    left: -30px;
    right: ${({ ishover }) => (ishover === 'true' ? '-40' : '0')}px;
    display: block;
    border-bottom: 2px solid ${({theme}) => theme.text.main};
    transform: translateY(-50%);
    transition: all 0.3s;
  }
  ::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 10px;
    height: 10px;
    border: 2px solid ${({theme}) => theme.text.main};
    border-left: none;
    border-bottom: none;
    transform: ${({ ishover }) => (ishover === 'true' ? 'translateX(40px)' : '')} translateY(-50%)
      rotate(45deg);
    transition: all 0.3s;
  }
`;

const TextBox = styled.span`
  vertical-align: middle;
  line-height: 55px;
`;

export default function Button({ text, children, width, type, ...restProps }: Props): ReactElement {
  const [hover, setHover] = useState<boolean>(false);
  const enterHandler = useCallback(() => setHover(true), []);
  const leaveHandler = useCallback(() => setHover(false), []);

  return (
    <StyledButton
      to={'#'}
      $width={width}
      $type={type}
      onMouseEnter={enterHandler}
      onMouseLeave={leaveHandler}
      onFocus={enterHandler}
      onBlur={leaveHandler}
      ishover={hover.toString()}
      {...restProps}
    >
      {restProps.arrowanimation ? <ArrowIcon ishover={hover.toString()} /> : null}
      <TextBox>{children ?? text}</TextBox>
    </StyledButton>
  );
}

Button.defaultProps = {
  type: 'primary'
};
