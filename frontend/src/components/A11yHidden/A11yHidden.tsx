import React, { ElementType, ReactNode } from 'react';
import { classNames } from '../../utils/classNames';
import { A11yHidden as StyledA11yHidden } from'./A11yHidden.styled';

interface A11yHiddenProps {
  as: ElementType,
  className: string,
  focusable: boolean,
  href?: string,
  children?: ReactNode
}

export default function A11yHidden({
  as,
  className,
  focusable,
  children,
  href,
  ...restProps
}: A11yHiddenProps) {
  return (
    <StyledA11yHidden
      as={as}
      href={href}
      className={classNames('a11yHidden', className, { focusable })}
      {...restProps}
    >
      {children}
    </StyledA11yHidden>
  );
}

A11yHidden.defaultProps = {
  as: 'div',
  className: '',
  focusable: false,
}