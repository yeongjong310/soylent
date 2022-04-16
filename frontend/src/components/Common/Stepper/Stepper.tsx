import React, { ReactElement, useState } from 'react'
import { Container } from './Stepper.styled';

interface Props {
  min: number;
  max: number;
}

export default function Stepper({ min, max }: Props): ReactElement {
  const [count, setCount] = useState(1);
  const updateCount = (step: number) => {
    const nextCount = count + step;
    if ( nextCount < min || nextCount > max) return;
    setCount(count + step);
  }
  return (
    <Container>
      <button type="button" onClick={() => {updateCount(-1)}}>-</button>
      <output>{count}</output>
      <button type="button" onClick={() => {updateCount(1)}}>+</button>
    </Container>
  )
}

Stepper.defaultProps = {
  min: 1,
  max: 10,
}
