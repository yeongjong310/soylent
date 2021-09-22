import React, { ReactElement, ReactNode, ElementType } from 'react'
import { StyledIconLink } from './IconLink.styled';

type asProps = {
  className?: string; 
  to: string;
}

type IconButtonProps = asProps & {
  as?: ElementType;
  children: ReactNode;
  role?: string;

} 

const toggleCart: React.MouseEventHandler<HTMLButtonElement> = (e) => {
  
}

export default function IconLink({as, className, to, children, ...restProps}: IconButtonProps): ReactElement {
  return (
    typeof as === typeof undefined 
      ? (
        <StyledIconLink
          to={to}
          className={className}
          {...restProps}
        >
          {children}
        </StyledIconLink>
      )
      : (
        <StyledIconLink
          as={as}
          className={className}
          onClick={toggleCart}
          {...restProps}
        >
          {children}
        </StyledIconLink>
      )
  )
}

IconLink.defaultProps = {
  to: ''
}