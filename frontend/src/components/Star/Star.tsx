import React, { ReactElement } from 'react';

interface StarProps {
  percent: 0 | 50 | 100;
}

export default function Star({ percent }: StarProps): ReactElement {
  return percent === 100 ? (
    <img src="./assets/Icon/FullStar.webp" alt="Full Star" />
  ) : percent === 50 ? (
    <img src="./assets/Icon/HalfStar.png" alt="Half Star" />
  ) : (
    <img src="./assets/Icon/EmptyStar.png" alt="Empty Star" />
  );
}
