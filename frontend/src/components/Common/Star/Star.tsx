import React, { ReactElement } from 'react';
import EmptyStar from './assets/Icon/EmptyStar.webp';
import HalfStar from './assets/Icon/HalfStar.webp';
import FullStar from './assets/Icon/FullStar.webp';
import { StyledStar } from './Star.styled';
import StarProps from './Star.type';

export default function Star({
  className,
  percent,
  size,
}: StarProps): ReactElement {
  return (
    <StyledStar
      className={className}
      size={size}
      src={percent === 100 ? FullStar : percent === 50 ? HalfStar : EmptyStar}
      alt="Full Star"
    />
  );
}

Star.defaultProps = {
  size: 10,
};
