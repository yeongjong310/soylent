import { Star } from 'components';
import React, { ReactElement } from 'react'

interface Props {
  score : number
}

export default function ScoreByStars({score}: Props): ReactElement {
  if (score < 0 || score > 5) throw new Error('over score range 0 between 5');

  const integer = Math.floor(score);
  const decimal = score % 1;

  const scores = Array(5).fill(0).map((_, index) => {
    if (index < integer) return 100; 
    if (index === integer) return Math.round(decimal * 100) >= 50 ? 50 : 0;
    return 0
  });

  return (
    <div>
      { scores.map(score => <Star percent={score} />) }
      <span className="review">302 Reviews</span>
    </div>
  )
}
